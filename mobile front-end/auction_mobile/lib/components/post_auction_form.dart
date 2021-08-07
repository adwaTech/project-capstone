import 'package:flutter/material.dart';

class PostAuctionForm extends StatefulWidget {
  final Function onSubmit;
  PostAuctionForm(this.onSubmit);

  @override
  _PostAuctionFormState createState() => _PostAuctionFormState();
}

class _PostAuctionFormState extends State<PostAuctionForm>
    with SingleTickerProviderStateMixin {
  GlobalKey<FormState> _closedFormKey = GlobalKey<FormState>(),
      _openFormKey = GlobalKey<FormState>();
  TabController _tabController;
  void initState() {
    super.initState();
    _tabController = TabController(length: 2, vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        child: Column(children: [
      TabBar(controller: _tabController, labelColor: Colors.black, tabs: [
        Tab(
          child: Text('Closed Auctions'),
        ),
        Tab(
          child: Text('Live Auctions'),
        )
      ]),
      Expanded(
          child: Padding(
              padding: EdgeInsets.all(30),
              child: TabBarView(controller: _tabController, children: [
                Form(
                    key: _closedFormKey,
                    child: Container(
                      child: ListView(
                        children: [
                          Text('Enter Auction title'),
                          TextFormField(),
                          Divider(),
                          Text('Enter short description'),
                          TextFormField(),
                          Divider(),
                          Text('Enter detailed description.'),
                          TextFormField(),
                          Divider(),
                          Text('Specify deadline'),
                          CalendarDatePicker(
                              initialDate: DateTime(2020),
                              firstDate: DateTime(
                                2019,
                              ),
                              lastDate: DateTime(2021),
                              onDateChanged: (dateTime) {
                                print('hello');
                              }),
                          Divider(),
                          Text('Select category'),
                          DropdownButton(
                              value: 'land',
                              onChanged: (value) {},
                              items: [
                                DropdownMenuItem(
                                  child: Text('Land'),
                                  value: 'land',
                                ),
                                DropdownMenuItem(
                                    child: Text('Electronics'),
                                    value: 'electronics'),
                                DropdownMenuItem(
                                  child: Text('Vehicle'),
                                  value: 'vechicle',
                                )
                              ]),
                          TextFormField(),
                          TextFormField(),
                        ],
                      ),
                    )),
                Form(
                    key: _openFormKey,
                    child: Container(
                      child: ListView(
                        children: [
                          Text('Enter Auction title'),
                          TextFormField(),
                          Divider(),
                          Text('Enter short description'),
                          TextFormField(),
                          Divider(),
                          Text('Enter detailed description.'),
                          TextFormField(),
                          Divider(),
                          Text('Specify Auction date'),
                          CalendarDatePicker(
                              initialDate: DateTime(2020),
                              firstDate: DateTime(
                                2019,
                              ),
                              lastDate: DateTime(2021),
                              onDateChanged: (dateTime) {
                                print('hello');
                              }),
                          Divider(),
                          Text('Select category'),
                          DropdownButton(
                              value: 'land',
                              onChanged: (value) {},
                              items: [
                                DropdownMenuItem(
                                  child: Text('Land'),
                                  value: 'land',
                                ),
                                DropdownMenuItem(
                                    child: Text('Electronics'),
                                    value: 'electronics'),
                                DropdownMenuItem(
                                  child: Text('Vehicle'),
                                  value: 'vechicle',
                                )
                              ]),
                          TextFormField(),
                          TextFormField(),
                        ],
                      ),
                    )),
              ]))),
    ]));
  }
}
