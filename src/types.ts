export interface Data {
  alt_description: string;
  blur_hash: string;
  color: string;
  created_at: string;
  description: string;
  downloads: number;
  height: number;
  id: string;
  likes: number;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  views: number;
  width: number;
}
