import 'package:auction_mobile/your_bids.dart';
import 'package:flutter/material.dart';
import 'package:charts_flutter/flutter.dart';

import 'api/api.dart';

class ProfilePage extends StatefulWidget {
  @override
  _ProfilePageState createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  final List<_AuctionData> _data = [
    _AuctionData('Won', 20),
    _AuctionData('lost', 87),
    _AuctionData('Pending', 32)
  ];
  final _colorPalette = [
    MaterialPalette.green,
    MaterialPalette.red,
    MaterialPalette.blue
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Profile'),
      ),
      body: Container(
        child: Column(
          children: [
            Card(
              elevation: 5,
              // profile icon and name
              child: Container(
                height: 200,
                width: MediaQuery.of(context).size.width,
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Column(children: [
                      Container(
                        margin: EdgeInsets.all(3),
                        decoration: BoxDecoration(
                            image: DecorationImage(
                                image: (API.getInstance().user.profileImage !=
                                        null)
                                    ? Image.network(
                                        API.userImageUrl +
                                            API
                                                .getInstance()
                                                .user
                                                .profileImage
                                                .imageSrc,
                                        fit: BoxFit.cover,
                                      )
                                    : AssetImage(
                                        'assets/images/product_logo.jpg'),
                                fit: BoxFit.cover),
                            borderRadius: BorderRadius.circular(90)),
                        height: 100,
                        width: 100,
                      ),
                      Container(
                        margin: EdgeInsets.all(10),
                        child: IconButton(
                          icon: Icon(Icons.add_a_photo),
                          onPressed: () {},
                        ),
                      )
                    ]),
                    Expanded(
                        child: Container(
                            child: Padding(
                      padding: EdgeInsets.all(1),
                      child: Card(
                          child: Container(
                        height: 200,
                        child: Center(
                            child: Padding(
                                padding: EdgeInsets.all(10),
                                child: Column(
                                  children: [
                                    Text(API.getInstance().user.firstName +
                                        ' ' +
                                        API.getInstance().user.lastName),
                                    Divider(),
                                    Row(
                                      children: [
                                        Expanded(child: Text('dorot salat')),
                                        Expanded(child: Text('lorem ipsum'))
                                      ],
                                    ),
                                    Row(
                                      children: [
                                        Expanded(child: Text('dorot salat')),
                                        Expanded(child: Text('lorem ipsum'))
                                      ],
                                    ),
                                    Row(
                                      children: [
                                        Expanded(child: Text('dorot salat')),
                                        Expanded(child: Text('lorem ipsum'))
                                      ],
                                    ),
                                    Row(
                                      children: [
                                        Expanded(child: Text('dorot salat')),
                                        Expanded(child: Text('lorem ipsum'))
                                      ],
                                    ),
                                  ],
                                ))),
                      )),
                    )))
                  ],
                ),
              ),
            ),
            //Divider(),
            Expanded(
                child: Card(
                    // profile statistics
                    elevation: 5,
                    child: ListView(
                      children: [
                        Card(
                          child: Container(
                              height: 50,
                              padding: EdgeInsets.all(10),
                              child: Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [Text('Total Posts'), Text('100')],
                              )),
                        ),
                        Divider(),
                        InkWell(
                            onTap: () {
                              Navigator.of(context).push(MaterialPageRoute(
                                  builder: (context) => YourBids()));
                            },
                            child: Card(
                                child: Container(
                                    height: 300,
                                    child: PieChart(
                                      [
                                        Series<_AuctionData, String>(
                                            id: 'participation_series',
                                            colorFn: (_, index) =>
                                                _colorPalette[index]
                                                    .shadeDefault,
                                            domainFn: (_AuctionData data, _) =>
                                                data.type,
                                            measureFn: (_AuctionData data, _) =>
                                                data.count,
                                            data: _data,
                                            labelAccessorFn: (_AuctionData data,
                                                    _) =>
                                                '${data.type} : ${data.count}')
                                      ],
                                      animate: true,
                                      defaultInteractions: true,
                                      animationDuration: Duration(seconds: 1),
                                      defaultRenderer: ArcRendererConfig(
                                          arcRendererDecorators: [
                                            ArcLabelDecorator(
                                              labelPosition:
                                                  ArcLabelPosition.inside,
                                            )
                                          ]),
                                      behaviors: [
                                        ChartTitle('Your Participation Data,'),
                                        DatumLegend(
                                            position: BehaviorPosition.end,
                                            desiredMaxColumns: 1)
                                      ],
                                    ))))
                      ],
                    ))),
          ],
        ),
      ),
    );
  }
}

class _AuctionData {
  final String type;
  final int count;
  _AuctionData(this.type, this.count);
}
