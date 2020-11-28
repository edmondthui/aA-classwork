Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:new, :create, :destroy]
  resource :session, only: [:new, :create, :destroy]
  resources :subs, except: [:destroy]
  resources :posts, except: [:index] do
    resources :comments, only: [:new]
  end
  resources :comments, only: [:create, :show]
end

# users       POST   /users(.:format)             users#create
# new_user    GET    /users/new(.:format)         users#new
#     user    DELETE /users/:id(.:format)         users#destroy
# new_session GET    /session/new(.:format)       sessions#new
#  session    DELETE /session(.:format)           sessions#destroy
#             POST   /session(.:format)           sessions#create
#     subs    GET    /subs(.:format)              subs#index
#             POST   /subs(.:format)              subs#create
#  new_sub    GET    /subs/new(.:format)          subs#new
# edit_sub    GET    /subs/:id/edit(.:format)     subs#edit
#      sub    GET    /subs/:id(.:format)          subs#show
#             PATCH  /subs/:id(.:format)          subs#update
#             PUT    /subs/:id(.:format)          subs#update
#    posts    POST   /posts(.:format)             posts#create
# new_post    GET    /posts/new(.:format)         posts#new
# edit_post   GET    /posts/:id/edit(.:format)    posts#edit
#     post    GET    /posts/:id(.:format)         posts#show
#             PATCH  /posts/:id(.:format)         posts#update
#             PUT    /posts/:id(.:format)         posts#update
#             DELETE /posts/:id(.:format)         posts#destroy
# comments    POST   /comments(.:format)          comments#create
# post_comments POST   /posts/:post_id/comments(.:format)      comments#create
#     comment GET    /comments/:id(.:format)      comments#show