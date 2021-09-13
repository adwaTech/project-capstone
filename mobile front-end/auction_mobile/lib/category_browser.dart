import 'package:auction_mobile/components/category_viewer.dart';
import 'package:auction_mobile/components/product_card.dart';
import 'package:auction_mobile/product_preview.dart';
import 'package:auction_mobile/providers/stream_provider.dart';
import 'package:flutter/material.dart';

import 'api/api.dart';
import 'api/auction.dart';
import 'components/category_card.dart';

class CategoriesBrowser extends StatefulWidget{
  CategoriesBrowser({
    @required TabController categoryTabController
  }):_categoryTabController = categoryTabController;

  final TabController _categoryTabController;
  @override
  _CategoriesBrowserState createState() => _CategoriesBrowserState();
}

class _CategoriesBrowserState extends State<CategoriesBrowser> {
  String category='land';
  TabController controller;
  void initState(){
    super.initState();
    controller = widget._categoryTabController;
    controller.addListener(() {
      category = (widget._categoryTabController.index==0)?'land'
                                :(widget._categoryTabController.index==1)?'house'
                                :(widget._categoryTabController.index==2)?'electronics'
                                :(widget._categoryTabController.index==3)?'vehicle'
                                :(widget._categoryTabController.index==4)?'service'
                                :(widget._categoryTabController.index==5)?'rare'
                                :'oldies';
    });
  }
  @override
  Widget build(BuildContext context) {
    return Card(
        child: Container(
            margin: EdgeInsets.all(10),
            height: 360,
            child: Column(children: [
              Container(
                  height: 20,
                  child: Text(
                    'Browse by Categories',
                    style: TextStyle(fontSize: 20),
                  )),
              Divider(),
              Container(
                  height: 50,
                  child: TabBar(
                    isScrollable: true,
                    labelColor: Colors.black,
                    controller: controller,
                    tabs: [
                      Category(Text('Land')),
                      Category(Text('House')),
                      Category(Text('Electronics')),
                      Category(Text('Vehicle')),
                      Category(Text('Service')),
                      Category(Text('Rare')),
                      Category(Text('Oldies')),
                    ],
                  )),
              StreamBuilder<List<Auction>>(
                        stream: ApiStream<List<Auction>>(List.empty(),Duration(seconds: 2),(_) async {
                          return await API.getInstance().getAuctions({
                            'type':'allx'
                          });
                        }).stream,
                        builder:(context,AsyncSnapshot<List<Auction>> snapshot)=>Container(
                margin: EdgeInsets.all(8),
                height: 200,
                child: TabBarView(
                  controller: controller,
                  children: [
                    Tab(
                      child: Container(
                          height: 200,
                          child: (snapshot.data==null)?
                          Center(child: CircularProgressIndicator(),)
                          :((Auction.filterCategory(snapshot, 'land')).length==0)?
                          Center(child:Text('No data'))
                          :ListView.builder(
                              scrollDirection: Axis.horizontal,
                              itemCount: snapshot.data!=null?Auction.filterCategory(snapshot, 'land').length:0,
                              itemBuilder: (context, index) => Hero(
                                  tag: 'landproduct$index',
                                  child: 
                                  Product.alternative(Auction.filterCategory(snapshot, 'land').elementAt(index),() {
                                    Navigator.of(context).push(MaterialPageRoute(
                                        builder: (context) => ProductPreview(
                                            'landproduct$index')));
                                  })
                                  ))),
                    ),
                    Tab(
                      child: Container(
                          height: 200,
                          child: (snapshot.data==null)?
                          Center(child: CircularProgressIndicator(),)
                          :((Auction.filterCategory(snapshot, 'house')).length==0)?
                          Center(child:Text('No data'))
                          :ListView.builder(
                              scrollDirection: Axis.horizontal,
                              itemCount: snapshot.data!=null?Auction.filterCategory(snapshot, 'house').length:0,
                              itemBuilder: (context, index) => Hero(
                                  tag: 'houseproduct$index',
                                  child: 
                                  Product.alternative(Auction.filterCategory(snapshot, 'house').elementAt(index),() {
                                    Navigator.of(context).push(MaterialPageRoute(
                                        builder: (context) => ProductPreview(
                                            'houseproduct$index')));
                                  })
                                  ))),
                    ),
                    Tab(
                      child: Container(
                          height: 200,
                          child: (snapshot.data==null)?
                          Center(child: CircularProgressIndicator(),)
                          :((Auction.filterCategory(snapshot, 'electronics')).length==0)?
                          Center(child:Text('No data'))
                          :ListView.builder(
                              scrollDirection: Axis.horizontal,
                              itemCount:Auction.filterCategory(snapshot, 'electronics').length,
                              itemBuilder: (context, index) => Hero(
                                  tag: 'electronicsproduct$index',
                                  child: 
                                  Product.alternative(Auction.filterCategory(snapshot, 'electronics').elementAt(index),() {
                                    Navigator.of(context).push(MaterialPageRoute(
                                        builder: (context) => ProductPreview(
                                            'electronicsproduct$index')));
                                  })
                                  ))),
                    ),
                    Tab(
                      child: Container(
                          height: 200,
                          child: (snapshot.data==null)?
                          Center(child: CircularProgressIndicator(),)
                          :((Auction.filterCategory(snapshot, 'vehicle')).length==0)?
                          Center(child:Text('No data'))
                          :ListView.builder(
                              scrollDirection: Axis.horizontal,
                              itemCount: snapshot.data!=null?Auction.filterCategory(snapshot, 'vehicle').length:0,
                              itemBuilder: (context, index) => Hero(
                                  tag: 'vehicleproduct$index',
                                  child: 
                                  Product.alternative(Auction.filterCategory(snapshot, 'vehicle').elementAt(index),() {
                                    Navigator.of(context).push(MaterialPageRoute(
                                        builder: (context) => ProductPreview(
                                            'vehicleproduct$index')));
                                  })
                                  ))),
                    ),
                    Tab(
                      child: Container(
                          height: 200,
                          child: (snapshot.data==null)?
                          Center(child: CircularProgressIndicator(),)
                          :((Auction.filterCategory(snapshot, 'service')).length==0)?
                          Center(child:Text('No data'))
                          :ListView.builder(
                              scrollDirection: Axis.horizontal,
                              itemCount: snapshot.data!=null?Auction.filterCategory(snapshot, 'service').length:0,
                              itemBuilder: (context, index) => Hero(
                                  tag: 'serviceproduct$index',
                                  child: 
                                  Product.alternative(Auction.filterCategory(snapshot, 'service').elementAt(index),() {
                                    Navigator.of(context).push(MaterialPageRoute(
                                        builder: (context) => ProductPreview(
                                            'serviceproduct$index')));
                                  })
                                  ))),
                    ),
                    Tab(
                      child: Container(
                          height: 200,
                          child: (snapshot.data==null)?
                          Center(child: CircularProgressIndicator(),)
                          :((Auction.filterCategory(snapshot, 'rare')).length==0)?
                          Center(child:Text('No data'))
                          :ListView.builder(
                              scrollDirection: Axis.horizontal,
                              itemCount: snapshot.data!=null?Auction.filterCategory(snapshot, 'rare').length:0,
                              itemBuilder: (context, index) => Hero(
                                  tag: 'rareproduct$index',
                                  child: 
                                  Product.alternative(Auction.filterCategory(snapshot, 'rare').elementAt(index),() {
                                    Navigator.of(context).push(MaterialPageRoute(
                                        builder: (context) => ProductPreview(
                                            'rareproduct$index')));
                                  })
                                  ))),
                    ),
      
                    Tab(
                      child: Container(
                          height: 200,
                          child: (snapshot.data==null)?
                          Center(child: CircularProgressIndicator(),)
                          :((Auction.filterCategory(snapshot, 'oldies')).length==0)?
                          Center(child:Text('No data'))
                          :ListView.builder(
                              scrollDirection: Axis.horizontal,
                              itemCount: snapshot.data!=null?Auction.filterCategory(snapshot, 'oldies').length:0,
                              itemBuilder: (context, index) => Hero(
                                  tag: 'oldiesproduct$index',
                                  child: 
                                  Product.alternative(Auction.filterCategory(snapshot, 'oldies').elementAt(index),() {
                                    Navigator.of(context).push(MaterialPageRoute(
                                        builder: (context) => ProductPreview(
                                            'oldiesproduct$index')));
                                  })
                                  ))),
                    ),
                  ],
                ),
              )),
              Container(
                  height: 50,
                  child: Padding(
                    padding: EdgeInsets.all(8),
                    child: Align(
                      alignment: Alignment.bottomRight,
                      child: ElevatedButton(
                        onPressed: () {
                          Navigator.of(context).push(MaterialPageRoute(
                              builder: (context) => CategoryViewer(
                                category,
                                new ApiStream<List<Auction>>(List.empty(),Duration(seconds: 2),(_) async {
                          return await API.getInstance().getAuctions({
                            'type':'category',
                            'category': category
                          });
                        }))));
                        },
                        child: Text('Show All'),
                      ),
                    ),
                  ))
            ])));
  }
}
