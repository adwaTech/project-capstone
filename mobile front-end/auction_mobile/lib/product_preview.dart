import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class ProductPreview extends StatelessWidget {
  final String heroTag;
  ProductPreview(this.heroTag);
  Widget build(BuildContext context) => Hero(
        tag: heroTag,
        child: CustomScrollView(
          physics: BouncingScrollPhysics(),
          slivers: [
            SliverAppBar(
              pinned: true,
              stretch: true,
              stretchTriggerOffset: 200,
              expandedHeight: 300,
              backgroundColor: Colors.teal[800],
              title: Text(heroTag),
              flexibleSpace: FlexibleSpaceBar(
                  collapseMode: CollapseMode.parallax,
                  background: DecoratedBox(
                    position: DecorationPosition.foreground,
                    decoration: BoxDecoration(
                        gradient: LinearGradient(
                            begin: Alignment.bottomCenter,
                            end: Alignment.center,
                            colors: [Colors.teal[800], Colors.transparent])),
                    child: Image.asset(
                      'assets/images/product_logo.jpg',
                      fit: BoxFit.cover,
                    ),
                  )),
            ),
            SliverList(
              delegate: SliverChildListDelegate([
                Container(
                    color: Colors.teal,
                    child: Card(
                        elevation: 10,
                        child: Padding(
                            padding: EdgeInsets.all(30),
                            child: Row(
                              children: [
                                Expanded(
                                    child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      'Name:',
                                      style: TextStyle(fontSize: 20),
                                    ),
                                    Text('Initial price:',
                                        style: TextStyle(fontSize: 20)),
                                    Text(
                                      'Name:',
                                      style: TextStyle(fontSize: 20),
                                    ),
                                    Text('Initial price:',
                                        style: TextStyle(fontSize: 20)),
                                  ],
                                )),
                                Expanded(
                                    child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(heroTag,
                                        style: TextStyle(fontSize: 20)),
                                    Text('1200 Birr',
                                        style: TextStyle(fontSize: 20)),
                                    Text(heroTag,
                                        style: TextStyle(fontSize: 20)),
                                    Text('1200 Birr',
                                        style: TextStyle(fontSize: 20)),
                                  ],
                                )),
                              ],
                            )))),
                Container(
                    color: Colors.teal,
                    child: Card(
                        child: ExpansionTile(
                      initiallyExpanded: true,
                      title: Text('Detailed Specifications'),
                      children: [
                        Text('w jlkw jflejwl fekl jelkj efekl je'),
                        Text('jesl fjsekl fekl fjeklfelk feklj fekljf e'),
                        Text('w jlkw jflejwl fekl jelkj efekl je'),
                        Text('jesl fjsekl fekl fjeklfelk feklj fekljf e'),
                        Text('w jlkw jflejwl fekl jelkj efekl je'),
                        Text('jesl fjsekl fekl fjeklfelk feklj fekljf e')
                      ],
                    ))),
                Container(
                    color: Colors.teal,
                    child: Card(
                        child: ExpansionTile(
                      initiallyExpanded: true,
                      title: Text('Detailed Auction rules'),
                      children: [
                        Text('w jlkw jflejwl fekl jelkj efekl je'),
                        Text('jesl fjsekl fekl fjeklfelk feklj fekljf e'),
                        Text('w jlkw jflejwl fekl jelkj efekl je'),
                        Text('jesl fjsekl fekl fjeklfelk feklj fekljf e'),
                        Text('w jlkw jflejwl fekl jelkj efekl je'),
                        Text('jesl fjsekl fekl fjeklfelk feklj fekljf e')
                      ],
                    ))),
                Container(
                    color: Colors.teal,
                    child: Card(
                        child: ExpansionTile(
                      initiallyExpanded: true,
                      title: Text('Auctioner profile'),
                      children: [
                        Text('w jlkw jflejwl fekl jelkj efekl je'),
                        Text('jesl fjsekl fekl fjeklfelk feklj fekljf e'),
                        Text('w jlkw jflejwl fekl jelkj efekl je'),
                        Text('jesl fjsekl fekl fjeklfelk feklj fekljf e'),
                        Text('w jlkw jflejwl fekl jelkj efekl je'),
                        Text('jesl fjsekl fekl fjeklfelk feklj fekljf e')
                      ],
                    )))
              ]),
            )
          ],
        ),
      );
}
