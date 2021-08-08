import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Product extends StatelessWidget {
  final Function callback;
  Product(this.callback);
  Widget build(BuildContext context) => Center(
      child: Material(
          child: InkWell(
              onTap: () {
                callback();
              },
              child: Card(
                elevation: 10,
                child: SizedBox(
                  width: 200,
                  height: 200,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      SizedBox(
                        width: 200,
                        height: 130,
                        child: Image.asset('assets/images/product_logo.jpg',
                            fit: BoxFit.cover),
                      ),
                      Divider(),
                      Text('Sample Product', style: TextStyle(fontSize: 16)),
                      Text('This is a sample ...', textAlign: TextAlign.left)
                    ],
                  ),
                ),
              ))));
}
