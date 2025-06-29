export const generateYouTubeThumbnail = (link: string): string => {
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = link.match(regExp);
  if (!match) {
    console.warn(`No se pudo extraer el ID del video del link: ${link}`);
    return 'https://i3.ytimg.com/vi/123/maxresdefault.jpg';
  }

  const videoId = match[1];
  return `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
};