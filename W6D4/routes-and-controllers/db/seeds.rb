# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Like.destroy_all
User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all
Comment.destroy_all


user1 = User.create!({username: 'Vincent Van GOAT'}) 
user2 = User.create!({username: 'Leonardo da Vinci'}) 
user3 = User.create!({username: 'Jackson Pollock'}) 
user4 = User.create!({username: 'Caravaggio'}) 
user5 = User.create!({username: 'Claude Monet'})


artwork1 = Artwork.create!({ title: 'Dunes', image_url: 'realart.com/1', artist_id: user1.id, favorite_artwork: false})
artwork2 = Artwork.create!({ title: 'Vitruvian Man', image_url: 'realart.com/2', artist_id: user2.id, favorite_artwork: false})
artwork3 = Artwork.create!({ title: 'Convergence', image_url: 'realart.com/3', artist_id: user3.id, favorite_artwork: false})
artwork4 = Artwork.create!({ title: 'Fatty Cat', image_url: 'cats.com/fat_cat', artist_id: user2.id, favorite_artwork: false})
artwork5 = Artwork.create!({ title: 'Fluffy Cat', image_url: 'cats.com/fluffy_cat', artist_id: user3.id, favorite_artwork: false})
artwork6 = Artwork.create!({ title: 'Royal Dog', image_url: 'doge.com/royal_doge', artist_id: user4.id, favorite_artwork: false})
artwork7 = Artwork.create!({ title: 'Fat Doge', image_url: 'doge.com/doge_pic', artist_id: user5.id, favorite_artwork: false})
artwork8 = Artwork.create!({ title: 'Raccoon', image_url: 'trashpanda.com', artist_id: user1.id, favorite_artwork: true})


shares = ArtworkShare.create!([
    {artwork_id: artwork1.id, viewer_id: user1.id, favorite_shared: false}, 
    {artwork_id: artwork2.id, viewer_id: user5.id, favorite_shared: false}, 
    {artwork_id: artwork3.id, viewer_id: user4.id, favorite_shared: false}, 
    {artwork_id: artwork5.id, viewer_id: user1.id, favorite_shared: false},
    {artwork_id: artwork5.id, viewer_id: user2.id, favorite_shared: false}, 
    {artwork_id: artwork5.id, viewer_id: user4.id, favorite_shared: false},
    {artwork_id: artwork3.id, viewer_id: user5.id, favorite_shared: false},
    {artwork_id: artwork7.id, viewer_id: user3.id, favorite_shared: true}
])


comments = Comment.create!([
    {artwork_id: artwork2.id, user_id: user1.id, body: 'Something something'}, 
    {artwork_id: artwork1.id, user_id: user2.id, body: 'Something cool'}, 
    {artwork_id: artwork3.id, user_id: user4.id, body: 'Something funny'},
    {artwork_id: artwork5.id, user_id: user3.id, body: 'Something pretty'},
    {artwork_id: artwork4.id, user_id: user3.id, body: 'Something about pie'},
    {artwork_id: artwork4.id, user_id: user4.id, body: 'Something random'},
    {artwork_id: artwork1.id, user_id: user2.id, body: 'Something strange'}
])
    
likes = Like.create!([
    {like_id: artwork4.id, like_type: 'Artwork', user_id: user1.id}
])