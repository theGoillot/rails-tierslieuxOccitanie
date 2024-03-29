Rails.application.routes.draw do
  mount ForestLiana::Engine => '/forest'
  # mount ForestLiana::Engine => '/forest'
  devise_for :users

  root to: 'pages#home'

  get 'dashboard' => 'pages#dashboard'
  get 'about-us' => 'pages#who'
  get 'le-reseau' => 'pages#network'
  get 'tisseo' => 'pages#tisseo'
  get 'new' => 'pages#after_fill'
  get 'prix' => 'pages#price'

  resources :working_places do
    put 'validate'
    put 'membership'
  end

mount Attachinary::Engine => "/attachinary"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
