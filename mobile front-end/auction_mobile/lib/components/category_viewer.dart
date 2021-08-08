import 'package:auction_mobile/components/product_card.dart';
import 'package:auction_mobile/components/product_tile.dart';
import 'package:flutter/material.dart';

class CategoryViewer extends StatefulWidget {
  @override
  _CategoryViewerState createState() => _CategoryViewerState();
}

class _CategoryViewerState extends State<CategoryViewer> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        physics: BouncingScrollPhysics(),
        slivers: [
          SliverAppBar(
            title: Text('Category'),
          ),
          SliverList(
              delegate: SliverChildBuilderDelegate(
                  (context, index) => ProductTile(index),
                  childCount: 20))
        ],
      ),
    );
  }
}
