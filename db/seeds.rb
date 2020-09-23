# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.delete_all

Restaurant.create(:name => "Golden Crust", :location => "Queens", :cuisine => "Jamaican")
Restaurant.create(:name => "Taco Morelos", :location => "Queens", :cuisine => "Mexican")
Restaurant.create(:name => "Sal's Halal Hut", :location => "Queens", :cuisine => "Halal")
Restaurant.create(:name => "La Pequeńa", :location => "Queens", :cuisine => "Colombian")
Restaurant.create(:name => "Gino's", :location => "Queens", :cuisine => "Italian")
Restaurant.create(:name => "Hangawi", :location => "Queens", :cuisine => "Vegan")
Restaurant.create(:name => "Dickie's BBQ Pit", :location => "Queens", :cuisine => "BBQ")

Restaurant.create(:name => "Mickey's Trattoria", :location => "Staten Island", :cuisine => "Italian")
Restaurant.create(:name => "Taco Hut", :location => "Staten Island", :cuisine => "Mexican")
Restaurant.create(:name => "Hamad's", :location => "Staten Island", :cuisine => "Halal")

Restaurant.create(:name => "Yummy Taco", :location => "Brooklyn", :cuisine => "Mexican")
Restaurant.create(:name => "Veggie Castle", :location => "Brooklyn", :cuisine => "Vegan")
Restaurant.create(:name => "Patmar", :location => "Brooklyn", :cuisine => "Jamaican")
Restaurant.create(:name => "Esca", :location => "Brooklyn", :cuisine => "Italian")
Restaurant.create(:name => "Zahid's", :location => "Brooklyn", :cuisine => "Halal")
Restaurant.create(:name => "Dora's", :location => "Brooklyn", :cuisine => "Dominican")

Restaurant.create(:name => "Silvia's", :location => "Manhattan", :cuisine => "Southern")
Restaurant.create(:name => "The Vegan Life", :location => "Manhattan", :cuisine => "Vegan")
Restaurant.create(:name => "The Halal Guys", :location => "Manhattan", :cuisine => "Halal")
Restaurant.create(:name => "Carbone", :location => "Manhattan", :cuisine => "Italian")



Restaurant.create(:name => "Robertos", :location => "Bronx", :cuisine => "Italian")
Restaurant.create(:name => "Medellin Cuisine", :location => "Bronx", :cuisine => "Colombian")
Restaurant.create(:name => "Lena", :location => "Bronx", :cuisine => "Dominican")
Restaurant.create(:name => "Jamaican Flavors", :location => "Bronx", :cuisine => "Jamaican")
Restaurant.create(:name => "The Halal Guys", :location => "Bronx", :cuisine => "Halal")
