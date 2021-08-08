import 'package:flutter/material.dart';

import '../product_preview.dart';

class ProductTile extends StatelessWidget {
  final int index;
  ProductTile(this.index);
  Widget build(BuildContext context) => Hero(
        tag: 'hero$index',
        child: Card(
          elevation: 20,
          child: Container(
            height: 150,
            child: Row(
              children: [
                Container(
                    height: 150,
                    child: Image.asset(
                      'assets/images/product_logo.jpg',
                      fit: BoxFit.cover,
                    )),
                Expanded(
                    child: Padding(
                        padding: EdgeInsets.all(10),
                        child: Container(
                            height: 150,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: [
                                Text('Auction Title',
                                    style: TextStyle(fontSize: 20)),
                                Row(
                                  children: [
                                    Expanded(flex: 1, child: Text('Deadline')),
                                    Expanded(flex: 1, child: Text('2013'))
                                  ],
                                ),
                                Row(
                                  children: [
                                    Expanded(
                                        flex: 1, child: Text('Other Stuff')),
                                    Expanded(
                                        flex: 1, child: Text('Other value'))
                                  ],
                                ),
                                Row(
                                  children: [
                                    Expanded(
                                        flex: 1, child: Text('Other stuff')),
                                    Expanded(
                                        flex: 1, child: Text('Other stuff'))
                                  ],
                                ),
                                Expanded(
                                    child: Row(children: [
                                  Expanded(
                                      child: Align(
                                          alignment: Alignment.bottomRight,
                                          child: Padding(
                                              padding: EdgeInsets.all(10),
                                              child: ElevatedButton(
                                                  onPressed: () {
                                                    Navigator.of(context).push(
                                                        MaterialPageRoute(
                                                            builder: (context) =>
                                                                ProductPreview(
                                                                    'hero$index')));
                                                  },
                                                  child: Text('Preview')))))
                                ]))
                              ],
                            ))))
              ],
            ),
          ),
        ),
      );
}
