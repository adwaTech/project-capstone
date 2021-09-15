import 'package:auction_mobile/api/api.dart';
import 'package:auction_mobile/api/auction.dart';
import 'package:auction_mobile/providers/stream_provider.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Product extends StatelessWidget {
  final Function callback;
  final Auction auction;
  Product(this.auction,this.callback);
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
                        child: (auction.images!=null && auction.images.length>0)?
                        Image.network(
                          API.auctionImageUrl+auction.images[0].imageSrc,
                          fit: BoxFit.cover,
                        )
                        :Image.asset('assets/images/product_logo.jpg',
                            fit: BoxFit.cover),
                      ),
                      Divider(),
                      
                      Text((auction!=null)?'${auction.name}':'Sample Product', style: TextStyle(fontSize: 16)),
                      Text((auction!=null)?'${auction.briefDescription}':'This is a sample ...', textAlign: TextAlign.left)
                    ],
                  ),
                ),
              ))));
}
