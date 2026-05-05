
import { projectsData } from './src/data/projects';

const issues = [];

projectsData.forEach(p => {
  if (!p.slug) issues.push(`${p.name || p.id}: Missing slug`);
  if (!p.heroImage) issues.push(`${p.slug}: Missing heroImage`);
  if (!p.galleryImages || p.galleryImages.length === 0) issues.push(`${p.slug}: Empty galleryImages`);
  if (!p.location) issues.push(`${p.slug}: Missing location`);
});

console.log(JSON.stringify(issues, null, 2));
