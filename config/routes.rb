Rails.application.routes.draw do
  
  resources :users
  resources :patients
  resources :dentists
  resources :appointments
  resources :appointment_slots

   # Initially Authenticate User
   get '/authorized_user', to: 'users#show'

   # Login / Logout Routes
   post '/login', to: 'sessions#login'
   delete '/logout', to: 'sessions#logout'
   
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
