# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Painting.destroy_all
Room.destroy_all

room1 = Room.create(
    name: "Journeys"
)
room2 = Room.create(
    name: "Mythical Beasts"
)

voyage = Painting.create(
    artist: "Thomas Cole",
    date: 1842,
    movement: "Romanticism",
    title: "The Voyage of Life: Youth",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Thomas_Cole_-_The_Voyage_of_Life_Youth%2C_1842_%28National_Gallery_of_Art%29.jpg/800px-Thomas_Cole_-_The_Voyage_of_Life_Youth%2C_1842_%28National_Gallery_of_Art%29.jpg")

bridge = Painting.create(
    artist: "Claude Monet",
    date: 1874,
    movement: "Impressionism",
    title: "The Bridge at Argenteuil",
    image_url: "https://www.impressionists.org/images/paintings/bridge-at-argenteuil.jpg")

cannes = Painting.create(
    artist: "Pablo Picasso",
    date: 1958,
    movement: "Expressionism",
    title: "La Baie de Cannes",
    image_url: "https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://www.art-critique.com/wp-content/uploads/thumbs/16-524577-3a57h6fzrmunifi45r2dj4.jpg")

cassatt = Painting.create(
    artist: "Mary Cassatt",
    date: 1893,
    movement: "Impressionism",
    title: "The Boating Party",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Mary_Cassatt_-_The_Boating_Party_-_Google_Art_Project.jpg/1280px-Mary_Cassatt_-_The_Boating_Party_-_Google_Art_Project.jpg")

    
waves = Painting.create(
    artist: "Arnold Böcklin",
    date: 1883,
    movement: "Symbolism",
    title: "Im Spiel der Wellen",
    image_url: "https://res.cloudinary.com/tne/image/authenticated/s--7v0Ti9hm--/q_80/artworks/ARNOLD-BOECKLIN_IM-SPIEL-DER-WELLEN_CC-BY-SA_BSTGS_7754.jpg")

cat = Painting.create(
    artist: "Pablo Picasso",
    date: 1962,
    movement: "Surrealism",
    title: "Still life with cat and lobster",
    image_url: "https://i0.wp.com/uploads2.wikiart.org/images/pablo-picasso/still-life-with-cat-and-lobster-1962.jpg?ssl=1")
    
funk = Painting.create(
        artist: "Jim Nutt",
        date: 1967,
        movement: "Funk",
        title: "Miss T. Garmint (she pants a lot)",
        image_url: "https://static01.nyt.com/images/2011/03/13/arts/03132011_NUTTSlide-slide-T7O1/03132011_NUTTSlide-slide-T7O1-jumbo.jpg?quality=75&auto=webp&disable=upscale")

rooster = Painting.create(
    artist: "Natalia Goncharova",
    date: 1910,
    movement: "Cubism",
    title: "Boy with rooster",
    image_url: "https://www.bertc.com/subfour/g126/images/goncharova.jpg")
frida = Painting.create(
    artist: "Frida Kahlo",
    date: 1940,
    movement: "Symbolism",
    title: "Self-Portrait with Thorn Necklace and Hummingbird",
    image_url: "https://www.fridakahlo.org/images/paintings/self-portrait-with-necklace-of-thorns.jpg")
kite = Painting.create(
    artist: "Arturo Rodriguez",
    date: "1998",
    movement: "",
    title: "Sin Titulo",
    image_url: "https://ids.si.edu/ids/deliveryService?max_w=800&id=SAAM-2013.18_1")
    room1.paintings << [voyage, bridge, cannes, cassatt]
    room2.paintings << [waves,cat,rooster,funk]