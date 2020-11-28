Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users
  # get '/users', to: 'users#index'
  # post '/users', to: 'users#create'
  # get '/users/new', to: 'users#new', as: 'new_user'
  # get '/users/:id/edit', to: 'users#edit', as: 'edit_user'
  # get '/users/:id', to: 'users#show', as: 'user'
  # patch '/users/:id', to: 'users#update'#, as: 'user'
  # put '/users/:id', to: 'users#update'#, as: 'user'
  # delete '/users/:id', to: 'users#destroy'#, #as: 'user'

  resources :users do
    resources :artworks, only: [:index]
    resources :comments, only: [:index]
    get 'favorite-art'
    get 'favorite-shared'
  end

  resources :artworks do 
    resources :comments, only: [:index]
  end

  resources :artworks, only: [:create, :show, :update, :destroy] 
  resources :artwork_shares, only: [:create, :destroy]
  resources :comments, only: [:index, :create, :destroy]



#   resources :photos do
#     get 'preview', :on => :member
#   end
  
  # GET /patients/17
  # get '/patients/:id', to: 'patients#show'
  # get '/patients/:id', to: 'patients#show', as: 'patient' 
  # GET	 /magazines/:magazine_id/ads/:id/edit	ads#edit     return an HTML form for editing an ad belonging to a specific magazine
  # You can specify a name for any route using the :as option:
  # Nested routes allow you to capture this relationship in your routing. In this case, you could include this route declaration:
  # resources :magazines do
  # resources :ads
end
