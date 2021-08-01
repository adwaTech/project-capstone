import 'package:auction_mobile/product_preview.dart';
import 'package:flutter/material.dart';

import 'category_card.dart';
import 'product_card.dart';

class ProductBrowser extends StatelessWidget {
  const ProductBrowser({
    Key key,
    @required TabController productsTabController,
  })  : _productsTabController = productsTabController,
        super(key: key);

  final TabController _productsTabController;

  @override
  Widget build(BuildContext context) {
    return Card(
        elevation: 10,
        child: Container(
          height: 350,
          margin: EdgeInsets.all(10),
          child: Column(
            children: [
              Text(
                'Available Products',
                style: TextStyle(fontSize: 20),
              ),
              Divider(),
              TabBar(
                labelColor: Colors.black,
                controller: _productsTabController,
                tabs: [
                  Tab(
                    child: Category(Text('Latest')),
                  ),
                  Tab(
                    child: Category(Text('Popular')),
                  ),
                  Tab(
                    child: Category(Text('Recommeded')),
                  ),
                ],
              ),
              Container(
                height: 200,
                margin: EdgeInsets.all(8),
                child: TabBarView(
                  physics: NeverScrollableScrollPhysics(),
                  controller: _productsTabController,
                  children: [
                    Tab(
                      child: Container(
                        height: 200,
                        child: ListView.builder(
                          scrollDirection: Axis.horizontal,
                          itemCount: 7,
                          itemBuilder: (context,index)=>Hero(tag:'latestproduct$index',child:Product((){
                            Navigator.of(context).push(MaterialPageRoute(builder: (context)=>ProductPreview('latestproduct$index')));
                          })))
                      ),
                    ),
                    Tab(
                      child: Container(
                        height: 200,
                        child: ListView.builder(
                          scrollDirection: Axis.horizontal,
                          itemCount: 7,
                          itemBuilder: (context,index)=>Hero(tag:'popularproduct$index',child:Product((){
                            Navigator.of(context).push(MaterialPageRoute(builder: (context)=>ProductPreview('popularproduct$index')));
                          })))
                      ),
                    ),
                    Tab(
                      child: Container(
                        height: 200,
                        child: ListView.builder(
                          scrollDirection: Axis.horizontal,
                          itemCount: 7,
                          itemBuilder: (context,index)=>Hero(tag:'recommendedproduct$index',child:Product((){
                            Navigator.of(context).push(MaterialPageRoute(builder: (context)=>ProductPreview('recommendedproduct$index')));
                          })))
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: EdgeInsets.all(8),
                child:Align(
                  alignment: Alignment.bottomRight,
                  child: ElevatedButton(
                      onPressed: () {}, child: Text('Show all '))))
            ],
          ),
        ));
  }
}
