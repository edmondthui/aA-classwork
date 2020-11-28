require 'bcrypt'

class User < ApplicationRecord

    validates :user_name, :password_digest, :session_token, presence: true
    validates :session_token, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
        password_digest = BCrypt::Password.new(self.password_digest)
        password_digest.is_password?(password) 
    end

    def self.find_by_credentials(user_name, password)
        user = User.find_by(user_name: user_name)
        if user
            user.is_password?(password)
            user
        else
            nil
        end
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    has_many :cats,
        foreign_key: :user_id,
        class_name: :Cat

end