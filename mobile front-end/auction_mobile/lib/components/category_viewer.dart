import 'dart:async';

import 'package:auction_mobile/api/api.dart';
import 'package:auction_mobile/api/auction.dart';
import 'package:auction_mobile/components/product_tile.dart';
import 'package:auction_mobile/providers/stream_provider.dart';
import 'package:flutter/material.dart';

class CategoryViewer extends StatelessWidget {
  final String category;
  final ApiStream<List<Auction>> stream;
  CategoryViewer(this.category, this.stream);
  @override
  Widget build(BuildContext context) {
    return WillPopScope(
        onWillPop: () async {
          stream.terminate();
          return true;
        },
        child: Scaffold(
            body: StreamBuilder(
          stream: stream.stream,
          builder: (context, AsyncSnapshot<List<Auction>> snapshot) => CustomScrollView(
            physics: BouncingScrollPhysics(),
            slivers: [
              SliverAppBar(
                title: Text(category),
              ),
              (snapshot.data==null)?SliverFillRemaining(child: Center(child: CircularProgressIndicator(),),)
              :(snapshot.data.length==0)?SliverFillRemaining(child: Center(child: Text('No data'),),)
              :SliverList(
                  delegate: SliverChildBuilderDelegate(
                      (context, index) => ProductTile(index,snapshot.data[index]),
                      childCount: snapshot.data.length))
            ],
          ),
        )));
  }
}
