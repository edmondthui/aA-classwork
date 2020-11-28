# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all

users = User.create!([
    {username: 'Vincent Van GOAT'}, 
    {username: 'Leonardo da Vinci'}, 
    {username: 'Jackson Pollock'}, 
    {username: 'Caravaggio'}, 
    {username: 'Claude Monet'}
])


artworks = Artwork.create!([
    { title: 'Dunes', image_url: 'realart.com/1', artist_id: User.all[0].id }, 
    { title: 'Vitruvian Man', image_url: 'realart.com/2', artist_id: User.all[1].id}, 
    { title: 'Convergence', image_url: 'realart.com/3', artist_id: User.all[2].id}, 
    { title: 'Fatty Cat', image_url: 'cats.com/fat_cat', artist_id: User.all[1].id}, 
    { title: 'Fluffy Cat', image_url: 'cats.com/fluffy_cat', artist_id: User.all[2].id}, 
    { title: 'Royal Dog', image_url: 'doge.com/royal_doge', artist_id: User.all[3].id}, 
    { title: 'Fat Doge', image_url: 'doge.com/doge_pic', artist_id: User.all[4].id}
])


shares = ArtworkShare.create!([
    {artwork_id: Artwork.all[1].id, viewer_id: User.all[0].id}, 
    {artwork_id: Artwork.all[2].id, viewer_id: User.all[4].id}, 
    {artwork_id: Artwork.all[3].id, viewer_id: User.all[3].id}, 
    {artwork_id: Artwork.all[5].id, viewer_id: User.all[0].id},
    {artwork_id: Artwork.all[5].id, viewer_id: User.all[1].id}, 
    {artwork_id: Artwork.all[5].id, viewer_id: User.all[3].id},
    {artwork_id: Artwork.all[3].id, viewer_id: User.all[4].id}
])