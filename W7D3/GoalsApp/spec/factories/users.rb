FactoryBot.define do
  factory :user do
    username { Faker::FunnyName.name }
    password { "hunter2" }
  end
end
