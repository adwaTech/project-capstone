class ImageViewer {
  ImageViewer(this._imageSrc);
  String _imageSrc;
  String get imageSrc => _imageSrc;
  set imageSrc(imageSrc)=>_imageSrc = imageSrc;
  static List<ImageViewer> fromList(List<dynamic> list)=>List.generate(list.length, (index) => ImageViewer(list[index]));
  static List<String> toStringList(List<ImageViewer> list) => List.generate(list.length, (index) => list[index].imageSrc);
  // TODO: get image object function
}