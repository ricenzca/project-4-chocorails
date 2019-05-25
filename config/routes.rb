Rails.application.routes.draw do
  resources :promos
  resources :reviews
  resources :orders
  resources :customers
  
  get '/checkout' => 'products#checkout', :as => 'checkout'

  resources :products

  root 'products#index'

  match '*path', to: 'products#index', via: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end