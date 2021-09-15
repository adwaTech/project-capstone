import 'package:flutter/material.dart';

import 'api/api.dart';
import 'api/auction.dart';
import 'components/product_tile.dart';

class SearchView extends StatefulWidget {
  @override
  _SearchViewState createState() => _SearchViewState();
}

class _SearchViewState extends State<SearchView> {
  List<Auction> auctions = [];
  String error = '';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: TextField(
          cursorColor: Colors.black,
          decoration: InputDecoration(hintText: 'Search'),
          onChanged: (value) {
            if (value.isNotEmpty)
              API.getInstance().searchAuctions(value).then((value) {
                if (value != null) {
                  if (value.isEmpty) {
                    setState(() {
                      error = 'novalue';
                    });
                  } else
                    setState(() {
                      auctions = value;
                      error = '';
                    });
                } else {
                  setState(() {
                    error = 'error';
                  });
                }
              });
          },
        ),
      ),
      body: Container(
        child: (error == 'error')
            ? Center(child: Text('Searching Failed!'))
            : (error == 'novalue')
                ? Center(child: Text('NO Match was found'))
                : ListView(
                    children: List.generate(auctions.length,
                        (index) => ProductTile(index, auctions[index]))),
      ),
    );
  }
}
