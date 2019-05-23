json.extract! review, :id, :rating, :review_text, :nickname, :created_at, :updated_at
json.url review_url(review, format: :json)
