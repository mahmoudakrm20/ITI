import 'package:flutter/material.dart';
import 'package:flutter_application_task/Categories.dart';
import 'package:flutter_application_task/screens/AlbumListPage.dart';
import 'package:flutter_application_task/screens/SignUp.dart';
import 'package:flutter_application_task/screens/Success.dart';
import 'package:flutter_application_task/screens/WelcomeInput.dart';
import 'package:flutter_application_task/screens/Products.dart';
import 'package:hive/hive.dart';
import 'package:hive_flutter/hive_flutter.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Hive.initFlutter();
  await Hive.openBox('userBox');
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme:
            ColorScheme.fromSeed(seedColor: Color.fromARGB(255, 139, 78, 214)),
        useMaterial3: true,
      ),
      home: SignUp(),
      routes: {
        '/signup': (context) => SignUp(),
        '/welcome': (context) => WelcomeInput(),
        '/products': (context) => Products(),
        '/success': (context) => SuccessScreen(),
        '/categories': (context) => Categories(),
        '/albums': (context) => AlbumListPage(),
      },
    );
  }
}
