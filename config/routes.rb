Rails.application.routes.draw do
  
  # resources :users
  resources :dentists, only: [:index, :show]
  resources :appointments, only: [:index, :create, :update, :destroy, :show]

   # Initially Authenticate User
   get '/me', to: 'users#me'
   get 'myappointments', to: 'users#my_appointments'

   # Login / Logout Routes
   post '/signup', to: 'users#signup'
   post '/login', to: 'sessions#login'
   delete '/logout', to: 'sessions#logout'
   
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
