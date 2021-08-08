import 'package:flutter/material.dart';

class Category extends StatelessWidget {
  final Widget child;
  Category(this.child);

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Container(
            width: 100,
            height: 50,
            margin: EdgeInsets.all(10),
            decoration: BoxDecoration(
                color: Colors.white,
                boxShadow: [BoxShadow(color: Colors.grey, blurRadius: 10)],
                //border: Border.all(width: 2),
                borderRadius: BorderRadius.all(Radius.circular(100))),
            child: Center(
              child: child,
            )));
  }
}
