require 'sqlite3'
require 'singleton'

class QuestionsDB < SQLite3::Database 
    include Singleton 
    def initialize
        super('questions.db')
        self.type_translation = true 
        self.results_as_hash = true 
    end 

end 

class User

    attr_accessor :fname, :lname

    def self.all
        data = QuestionsDB.instance.execute("SELECT * FROM users")
        data.map {|datum| User.new(datum) }
    end 

    def self.find_by_id(id)
        user = QuestionsDB.instance.execute(<<-SQL, id)
        
            SELECT 
                fname, lname
            FROM
                users
            WHERE
                id = ?
        
        SQL

        return nil unless user.length > 0 
        user 
    end

    def self.find_by_name(fname, lname)
        name = QuestionsDB.instance.execute(<<-SQL, fname, lname)
            SELECT 
                id 
            FROM 
                users 
            WHERE 
                fname = ?
                AND lname = ? 

        SQL
        return nil unless name.length > 0 
        name 
    end 

    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
    end

    def insert
        QuestionsDB.instance.execute(<<-SQL, self.fname, self.lname)
            INSERT INTO
                users(fname, lname)
            VALUES
                (?, ?)
        SQL

        @id = QuestionsDB.instance.last_insert_row_id
        
    end


    def update 
        QuestionsDB.instance.execute(<<-SQL, self.fname, self.lname, @id)
            UPDATE
                users
            SET
                fname = ?, lname = ? 
            WHERE 
                id = ? 
        SQL
    end 

    def authored_questions
        Question.find_by_author_id(@id) 
    end

end 

class Question

    attr_accessor :title, :body, :users_id

    def self.all
        data = QuestionsDB.instance.execute("SELECT * FROM questions")
        data.map {|datum| Question.new(datum) }
    end 

    def self.find_by_id(id)
        question = QuestionsDB.instance.execute(<<-SQL, id)
        
            SELECT 
                title, body
            FROM
                questions
            WHERE
                id = ?
        
        SQL

        return nil unless question.length > 0 
        question
    end

    def self.find_by_author_id(users_id)
        author = QuestionsDB.instance.execute(<<-SQL, users_id)
            SELECT 
                title, body
            FROM 
                questions
            WHERE 
                users_id = ?

        SQL
        return nil unless author.length > 0 
        author
    end 

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @users_id = options['users_id']
    end 

    def insert
        QuestionsDB.instance.execute(<<-SQL, self.title, self.body, self.users_id)
            INSERT INTO
                questions(title, body, users_id)
            VALUES
                (?, ?, ?)
        SQL

        @id = QuestionsDB.instance.last_insert_row_id
        
    end


    def update 
        QuestionsDB.instance.execute(<<-SQL, self.title, self.body, self.users_id, @id)
            UPDATE
                questions
            SET
                title = ?, body = ?, users_id = ? 
            WHERE 
                id = ? 
        SQL
    end

    def author
        User.find_by_id(self.users_id)
    end


end


class QuestionFollow

    def self.all
        data = QuestionsDB.instance.execute("SELECT * FROM question_follows")
        data.map {|datum| QuestionFollow.new(datum) }
    end 

    def self.find_by_id(id)
        question_follows = QuestionsDB.instance.execute(<<-SQL, id)
        
            SELECT 
                users_id, questions_id
            FROM
                question_follows
            WHERE
                id = ?
        
        SQL

        return nil unless question_follows.length > 0 
        question_follows
    end

    def self.find_by_users_id(users_id)
        users = QuestionsDB.instance.execute(<<-SQL, users_id)
            SELECT 
            users_id, questions_id
            FROM 
            question_follows
            WHERE 
                users_id = ?

        SQL
        return nil unless users.length > 0 
        users
    end 

    def initialize(options)
        @id = options['id']
        @users_id = options['users_id']
        @questions_id = options['questions_id']
    end 

    def insert
        QuestionsDB.instance.execute(<<-SQL, @users_id, @questions_id)
            INSERT INTO
                question_follows(users_id, questions_id)
            VALUES
                (?, ?)
        SQL

        @id = QuestionsDB.instance.last_insert_row_id
        
    end


    def update 
        QuestionsDB.instance.execute(<<-SQL, @users_id, @questions_id, @id)
            UPDATE
                question_follows
            SET
                users_id = ?, questions_id = ?
            WHERE 
                id = ? 
        SQL
    end 
    
end 

class Reply 

   def self.all
        data = QuestionsDB.instance.execute("SELECT * FROM replies")
        data.map {|datum| Reply.new(datum) }
    end 

    def self.find_by_id(id)
        reply = QuestionsDB.instance.execute(<<-SQL, id)
        
            SELECT 
                parent_id, question_id, reply_body, users_id
            FROM
                replies 
            WHERE
                id = ?
        
        SQL

        return nil unless reply.length > 0 
        reply
    end

    def initialize(options)
        @id = options['id']
        @parent_id = options['parent_id']
        @question_id = options['question_id']
        @reply_body = options['reply_body'] 
        @users_id = options['users_id']
    end 

    def insert
        QuestionsDB.instance.execute(<<-SQL, @parent_id, @question_id, @reply_body, @users_id)
            INSERT INTO
                replies(parent_id, question_id, reply_body, users_id)
            VALUES
                (?, ?, ?, ?)
        SQL

        @id = QuestionsDB.instance.last_insert_row_id
        
    end


    def update 
        QuestionsDB.instance.execute(<<-SQL,  @parent_id, @question_id, @reply_body, @users_id, @id)
            UPDATE
                replies 
            SET
                parent_id = ?, question_id = ?, reply_body = ?, users_id = ?
            WHERE 
                id = ? 
        SQL
    end 

end 


class QuestionLike

    def self.all
         data = QuestionsDB.instance.execute("SELECT * FROM question_likes")
         data.map {|datum| QuestionLike.new(datum) }
     end 
 
     def self.find_by_id(id)
         question_likes = QuestionsDB.instance.execute(<<-SQL, id)
         
             SELECT 
                 users_id, question_id
             FROM
                 question_likes
             WHERE
                 id = ?
         
         SQL
 
         return nil unless question_likes.length > 0 
         question_likes
     end
 
     def initialize(options)
         @id = options['id']
         @users_id = options['users_id']
         @question_id = options['question_id']
     end 
 
     def insert
         QuestionsDB.instance.execute(<<-SQL, @users_id, @question_id )
             INSERT INTO
                 question_likes(users_id, question_id)
             VALUES
                 (?, ?)
         SQL
 
         @id = QuestionsDB.instance.last_insert_row_id
         
     end
 
 
     def update 
         QuestionsDB.instance.execute(<<-SQL, @users_id, @question_id, @id)
             UPDATE
                 question_likes
             SET
                 users_id = ?, question_id = ?
             WHERE 
                 id = ?
         SQL
     end 
 
 end 
 
 
