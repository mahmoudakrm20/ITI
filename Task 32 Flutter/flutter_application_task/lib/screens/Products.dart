import 'package:flutter/material.dart';

class Products extends StatefulWidget {
  const Products({super.key});

  @override
  _ProductsState createState() => _ProductsState();
}

class _ProductsState extends State<Products> {
  final Map<String, Map<String, String>> categories = {
    'New Arrivals': {
      'subtitle': '208 Product',
      'imagePath': 'images/new_arrivals.jpg',
    },
    'Clothes': {
      'subtitle': '358 Product',
      'imagePath': 'images/clothes.jpg',
    },
    'Bags': {
      'subtitle': '160 Product',
      'imagePath': 'images/bags.jpg',
    },
    'Shoes': {
      'subtitle': '230 Product',
      'imagePath': 'images/shoes.jpg',
    },
    'Electronics': {
      'subtitle': '130 Product',
      'imagePath': 'images/electronics.jpg',
    },
    'Jewelry': {
      'subtitle': '87 Product',
      'imagePath': 'images/jewelry.jpg',
    },
  };

  late List<MapEntry<String, Map<String, String>>> filteredCategories;
  bool showCategories = false;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    filteredCategories = categories.entries.toList();
  }

  void filterCategories(String query) {
    setState(() {
      filteredCategories = categories.entries
          .where(
              (entry) => entry.key.toLowerCase().contains(query.toLowerCase()))
          .toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: TextField(
              decoration: InputDecoration(
                hintText: 'Search Categories',
                filled: true,
                fillColor: Colors.grey[200],
                prefixIcon: Icon(Icons.search, color: Colors.black),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(30),
                  borderSide: BorderSide.none,
                ),
              ),
              onChanged: filterCategories,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: TextButton(
              onPressed: () {
                setState(() {
                  showCategories = !showCategories;
                });
              },
              child:
                  Text(showCategories ? 'Hide Categories' : 'Show Categories'),
              style: TextButton.styleFrom(
                backgroundColor: Colors.lightBlue[200],
                padding: EdgeInsets.symmetric(vertical: 12.0),
                textStyle: TextStyle(fontSize: 16),
              ),
            ),
          ),
          if (showCategories)
            Expanded(
              child: GridView.builder(
                itemCount: filteredCategories.length,
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  crossAxisSpacing: 10,
                  mainAxisSpacing: 10,
                ),
                padding: const EdgeInsets.all(16.0),
                itemBuilder: (context, index) {
                  final entry = filteredCategories[index];
                  return buildCategoryCard(entry.key, entry.value['subtitle']!,
                      entry.value['imagePath']!);
                },
              ),
            ),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.shopping_cart),
            label: 'Cart',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Profile',
          ),
        ],
      ),
    );
  }

  Widget buildCategoryCard(String title, String subtitle, String imagePath) {
    return Card(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Expanded(
            child: Image.asset(
              imagePath,
              fit: BoxFit.cover,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              title,
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0),
            child: Text(
              subtitle,
              style: TextStyle(color: Colors.grey),
            ),
          ),
        ],
      ),
    );
  }
}
