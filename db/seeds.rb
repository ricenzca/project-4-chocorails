# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'

# 10.times do
# 	Review.create(
# 		rating: Faker::Number.between(1,5),
# 		review_text: Faker::Lorem.paragraph(4),
# 		nickname: Faker::Name.first_name
# 	)
# end

product = Product.create([
  {brand: 'Krakakoa', name: 'Arenga 100% Dark', img_url: 'https://www.krakakoa.com/wp-content/uploads/2018/04/100-dark-chocolate.jpg', origin: 'Sumatra, Indonesia', ingredients: 'Cocoa beans', desc: 'This is 100% Sumatran cocoa at its purest. A complex bar with robust natural acidity of fermented cocoa and complex earthy aromas.', price: 3.6, weight: 50},
  {brand: 'Krakakoa', name: 'Arenga 85% Dark', img_url: 'https://www.krakakoa.com/wp-content/uploads/2018/04/85-dark-chocolate.jpg', origin: 'Sulawesi, Indonesia', ingredients: 'Cocoa beans, Palm sugar, Sunflower lecithin', desc: 'We blend Arenga palm sugar, harvested from the rainforests of Sulawesi, with sustainably grown cocoa, creating delicious chocolate with caramel notes that is also a force for wildlife conservation.', price: 4, weight: 50},
  {brand: 'Krakakoa', name: 'Arenga 70% Dark', img_url: 'https://www.krakakoa.com/wp-content/uploads/2018/04/70-dark-chocolate.jpg', origin: 'Sulawesi, Indonesia', ingredients: 'Cocoa beans, Palm sugar, Sunflower lecithin', desc: 'We blend Arenga palm sugar, harvested from the rainforests of Sulawesi, with sustainably grown cocoa, creating delicious chocolate with caramel notes that is also a force for wildlife conservation.', price: 4, weight: 50},
  {brand: 'Krakakoa', name: 'Arenga 60% Dark Milk', img_url: 'https://www.krakakoa.com/wp-content/uploads/2018/04/60prct-1.jpg', origin: 'Sulawesi, Indonesia', ingredients: 'Cocoa beans, Palm sugar, Cocoa butter, Milk powder, Sunflower lecithin', desc: 'We blend Arenga palm sugar, harvested from the rainforests of Sulawesi, with sustainably grown cocoa, creating delicious chocolate with caramel notes that is also a force for wildlife conservation.', price: 4, weight: 50},
  {brand: 'Krakakoa', name: 'Arenga 45% Dark Milk', img_url: 'https://www.krakakoa.com/wp-content/uploads/2018/04/45-milk-chocolate.jpg', origin: 'Sulawesi, Indonesia', ingredients: 'Cocoa beans, Palm sugar, Cocoa butter, Milk powder, Sunflower lecithin', desc: 'We blend Arenga palm sugar, harvested from the rainforests of Sulawesi, with sustainably grown cocoa, creating delicious chocolate with caramel notes that is also a force for wildlife conservation.', price: 4, weight: 50},
  {brand: 'Malagos', name: 'Malagos 100% Unsweetened', img_url: 'https://malagoschocolate.com/wp-content/uploads/2015/09/153-5.jpg', origin: 'Davao, Philippines', ingredients: 'Cocoa liquor', desc: 'Complex fruit and liquorice notes round out its robust aroma and lingering, uncompromising chocolate flavor.  An intense chocolate experience.', price: 11.05, weight: 153},
  {brand: 'Malagos', name: 'Malagos 85% Dark', img_url: 'https://malagoschocolate.com/wp-content/uploads/2015/09/85.jpg', origin: 'Davao, Philippines', ingredients: 'Cocoa liquor, Cane sugar, Cocoa butter, Soy lecithin', desc: 'Surprise your senses with the deep, complex, fruity flavor of single-origin Malagos 85% Dark Chocolates. Discover the liquorice and currant notes in a rich chocolate taste that luxuriously lingers. ', price: 3.15, weight: 100},
  {brand: 'Malagos', name: 'Malagos 72% Dark', img_url: 'https://malagoschocolate.com/wp-content/uploads/2015/09/50072MC.jpg', origin: 'Davao, Philippines', ingredients: 'Cocoa liquor, Cane sugar, Cocoa butter, Soy lecithin', desc: 'Enjoy Malagos 72% Dark Chocolates’s vibrant, fruity and floral notes. Treat your senses to its rich chocolate aroma, crisp snap and deep colors.', price: 3.15, weight: 100},
  {brand: 'Malagos', name: 'Malagos 65% Dark', img_url: 'https://malagoschocolate.com/wp-content/uploads/2015/09/50065MC.jpg', origin: 'Davao, Philippines', ingredients: 'Cocoa liquor, Cane sugar, Cocoa butter, Soy lecithin', desc: 'Savor Malagos 65% Dark Chocolates. The satisfying mouthfeel with hints of cherry and liquorice, the rich aroma and deep colors make each bite a sensory experience.', price: 3.15, weight: 100},
  {brand: 'Booja-Booja', name: 'Dark Ecuadorian Chocolate Truffles', img_url: 'https://www.boojabooja.com/wp-content/uploads/2014/10/hazelnut-1140x570-retina1.jpg', origin: 'Ecuador', ingredients: 'Cocoa solids, Cold pressed coconut oil, Agave syrup, water, Cocoa powder', desc: 'Melt in your mouth chocolate truffles, made with 100% dark raw chocolate from Ecuador. The real deal.', price: 12, weight: 138},
  {brand: 'Valenza', name: 'Peperoncino Bar', img_url: 'https://static1.squarespace.com/static/52618dd5e4b0e17cf2612f2d/52852243e4b0246de4336666/537121b4e4b05ff1a08269ca/1431447162843/Peperoncino+Product+Photo+2.jpg?format=1500w', origin: 'Venezuela', ingredients: 'Dark chocolate, hot crushed Calabrian Chili Peppers flakes; dark chocolate cocoa solids 61% minimum', desc: 'The Peperoncino Bar from Valenza Chocolatier pays homage to the pungent capsicum by infusing crushed Calabrian red pepper to a solid bar of the highest quality 61% single bean origin dark chocolate.  The resulting heat will awaken the taste buds at the back end without being overpowering, leaving a pleasant tingle that lingers after a smooth chocolate finish.   ', price: 10, weight: 85},
  {brand: 'Valenza', name: 'Bourbon Bar', img_url: 'https://static1.squarespace.com/static/52618dd5e4b0e17cf2612f2d/52852243e4b0246de4336666/52ddc483e4b0ce292b49c69a/1431447141672/Bourbon+Bar.jpg?format=2500w', origin: 'Venezuela', ingredients: 'Dark dark and milk chocolate, organic cream, Makers Mark bourbon, invert sugar, and Sicilian sea salt. Dark chocolate cocoa solids 61% minimum, milk chocolate cocoa solids 41% minimum', desc: 'Whether you like your spirits neat or on the rocks, you will find this intoxicating treat from Valenza Chocolatier to be the perfect complement.  Sit back in your favorite leather club chair and swirl your favorite whiskey as you savor a square of luscious 61% Venezuelan dark chocolate encasing a rich milk chocolate ganache infused with the heady oak notes of bourbon.  A pinch of our signature Sicilian sea salt adds the final touch to this boozy confection.', price: 10, weight: 85},
  {brand: 'Eponine', name: 'Spring Chocolate Collection', img_url: 'https://eponine.co.uk/wp-content/uploads/2019/04/Eponine-Spring-Collection-Flatlay-500px.jpg', origin: 'Various', ingredients: 'Cocoa mass, Sugar, Cocoa butter, Soya lecithin, Natural vanilla extract', desc: 'A stunning gift box of 16 beautifully crafted bonbons, inspired by Spring.', price: 42, weight: 85},
  {brand: 'Chocolat du Jour', name: 'Barra Quebra-Cabeça 80%', img_url: 'https://www.chocolatdujour.com.br/userfiles/imagens/2266_2044_grande4373ba0588.jpg', origin: 'Brazil', ingredients: '-', desc: 'Divertida barra de chocolate em formato de quebra-cabeça, com 80% Cacau. A linha Bean to Bar da Chocolat du Jour é produzida, exclusivamente, com cacau fino de origem brasileira. Do cultivo do cacau ao chocolate, garantimos um produto sempre fresco e de qualidade superior.', price: 10.4, weight: 95},
  {brand: 'Chocolat du Jour', name: 'Barras Bean to Bar Pratigi Kit - Kosher', img_url: 'https://www.chocolatdujour.com.br/userfiles/imagens/2491_1778_grandeb2d6b41b79.jpg', origin: 'Brazil', ingredients: '-', desc: 'Kit com três deliciosas barras do nosso exclusivo chocolate Pratigi, nas variedades Ao Leite 45%, 53% Cacau e 70% Cacau. A linha Bean to Bar da Chocolat du Jour é produzida exclusivamente com cacau fino de origem brasileira. Do cultivo do cacau ao chocolate, garantimos um produto sempre fresco e de qualidade superior.', price: 18.55, weight: 80},
  {brand: 'Chocolat du Jour', name: 'Estrelinhas Au Lait', img_url: 'https://www.chocolatdujour.com.br/userfiles/imagens/2578_1820_grande227afa67cf.jpg', origin: 'Brazil', ingredients: '-', desc: 'Nosso delicioso chocolate Au Lait em formato de estrelinhas, em lata dourada.', price: 25.5, weight: 200},
  {brand: 'Cocoa Mester', name: 'Toasted Brazil Nut Chocolate Bar', img_url: 'https://cocoamester.co.uk/wp-content/uploads/2018/11/CocoaMester-131.jpg', origin: 'Arauca, Colombia', ingredients: '70% Dark Chocolate', desc: 'Delicious chunky toasted Brazil nuts, covered in 70% Single origin Dark chocolate Arauca. ', price: 8.9, weight: 110},
  {brand: 'Cocoa Mester', name: 'Peppermint Tea Chocolate Bar', img_url: 'https://cocoamester.co.uk/wp-content/uploads/2018/11/CocoaMester-106.jpg', origin: 'Arauca, Colombia', ingredients: '41% Milk Chocolate, 60% Dark Chocolate', desc: 'We infuse Colombian cocoa butter for 48 hours with a blend of peppermint, spearmint and sencha tea to create this beautiful infusion with milk chocolate. Then decorate with a little dark chocolate for an extra special look. 41% Cocoa tempered milk chocolate bar, with 60% Dark chocolate decoration. Perfect for any tea lover', price: 8.55, weight: 100},
  {brand: 'Cocoa Mester', name: 'Tumaco 85% Single origin Chocolate Bar', img_url: 'https://cocoamester.co.uk/wp-content/uploads/2018/11/CocoaMester-135.jpg', origin: 'Tumaco, Colombia', ingredients: '85% Dark Chocolate', desc: 'The 85% Single origin Tumaco Colombia Gold Bar. Delicious fruity flavour profile with a strong cocoa hit for true chocoholics. We add a splash of edible gold for that extra special touch.', price: 10.8, weight: 100},
  {brand: 'Cocoa Mester', name: 'Maple Syrup Salted Caramel Nut Chocolate Bar', img_url: 'https://cocoamester.co.uk/wp-content/uploads/2018/11/CocoaMester-127.jpg', origin: 'Arauca, Colombia', ingredients: '70% Dark Chocolate', desc: 'Made from Single origin 70% Dark Chocolate from Arauca, at 140g is our heaviest bar . Jam packed with Pecans, Almonds and Red Skinned Peanuts all coated in our maple syrup caramel mix and sprinkled with sea salt.', price: 9.5, weight: 140}
])