export interface WorksInterface {
  id?: number;
  title: string;
  desc: string;
  titleImages: string;
  detailImages: { id: number; images: string };
  isFinished: boolean;
}
