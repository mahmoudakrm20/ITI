import 'package:flutter/material.dart';
import 'package:dio/dio.dart';

class AlbumListPage extends StatefulWidget {
  @override
  _AlbumListPageState createState() => _AlbumListPageState();
}

class _AlbumListPageState extends State<AlbumListPage> {
  Future<List<dynamic>>? _futureAlbums;

  @override
  void initState() {
    super.initState();
    _futureAlbums = fetchAlbums();
  }

  Future<List<dynamic>> fetchAlbums() async {
    final Dio dio = Dio();
    final response =
        await dio.get('https://jsonplaceholder.typicode.com/albums');
    return response.data;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Album List'),
      ),
      body: FutureBuilder<List<dynamic>>(
        future: _futureAlbums,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(
                child: Text(
                    "loading")); // did that because there was null error appearing for 1 second
          }
          // Display data here
          return ListView.builder(
            itemCount: snapshot.data!.length,
            itemBuilder: (context, index) {
              final album = snapshot.data![index];
              return ListTile(
                title: Text(album['title']),
                subtitle: Text('User ID: ${album['userId']}'),
              );
            },
          );
        },
      ),
    );
  }
}
