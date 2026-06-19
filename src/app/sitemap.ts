import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { projectsData, getProjectRegion } from "@/data/projects";

const BASE_URL = "https://zhmrealestatellc.ae";

function getStaticRoutes(): string[] {
  const appDir = path.join(process.cwd(), "src", "app");
  const routes: string[] = [""]; // Start with the home page (root route)

  if (!fs.existsSync(appDir)) {
    return routes;
  }

  function walk(dir: string, currentRoute = "") {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip dynamic route folders and administrative/api paths
        if (
          file.startsWith("[") ||
          file.startsWith("(") ||
          file === "admin" ||
          file === "api"
        ) {
          continue;
        }
        walk(fullPath, currentRoute ? `${currentRoute}/${file}` : file);
      } else if (file === "page.tsx") {
        if (currentRoute) {
          routes.push(currentRoute);
        }
      }
    }
  }

  walk(appDir);
  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  // 1. Generate sitemap entries for all static routes
  const staticRoutes = getStaticRoutes();
  const staticEntries = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route ? `/${route}` : ""}`,
    lastModified,
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Generate entries for dynamic projects and featured projects
  const dynamicEntries: MetadataRoute.Sitemap = [];
  
  // Track unique locations to generate location listing URLs once
  const featuredLocations = new Set<string>();
  const regularLocations = new Set<string>();

  projectsData.forEach((project) => {
    const region = getProjectRegion(project.location);
    if (!region) return;

    if (project.isFeatured) {
      // Add featured project location listing route if not added yet
      if (!featuredLocations.has(region)) {
        featuredLocations.add(region);
        dynamicEntries.push({
          url: `${BASE_URL}/featured-projects/${region}`,
          lastModified,
          changeFrequency: "weekly" as const,
          priority: 0.7,
        });
      }

      // Add featured project detail route
      dynamicEntries.push({
        url: `${BASE_URL}/featured-projects/${region}/${project.slug}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      });
    } else {
      // Add regular project location listing route if not added yet
      if (!regularLocations.has(region)) {
        regularLocations.add(region);
        dynamicEntries.push({
          url: `${BASE_URL}/projects/${region}`,
          lastModified,
          changeFrequency: "weekly" as const,
          priority: 0.7,
        });
      }

      // Add regular project detail route
      dynamicEntries.push({
        url: `${BASE_URL}/projects/${region}/${project.slug}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      });
    }
  });

  return [...staticEntries, ...dynamicEntries];
}
