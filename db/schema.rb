# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_28_051213) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "customers", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "email"
    t.string "address1"
    t.string "address2"
    t.string "state"
    t.string "postal_code"
    t.string "country"
    t.string "city"
    t.string "contact"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orders", force: :cascade do |t|
    t.bigint "tranxaction_id"
    t.bigint "product_id"
    t.integer "product_quantity"
    t.string "order_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_orders_on_product_id"
    t.index ["tranxaction_id"], name: "index_orders_on_tranxaction_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "brand"
    t.string "name"
    t.string "img_url"
    t.string "origin"
    t.string "ingredients"
    t.text "desc"
    t.float "price"
    t.integer "weight"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "promos", force: :cascade do |t|
    t.float "amount", default: 0.0
    t.integer "limit", default: 0
    t.date "expiration"
    t.string "code"
    t.boolean "percentage", default: false
    t.integer "used", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "rating"
    t.text "review_text"
    t.string "nickname"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tranxactions", force: :cascade do |t|
    t.bigint "customer_id"
    t.float "total_amount"
    t.bigint "promo_id"
    t.string "firstname"
    t.string "lastname"
    t.string "email"
    t.string "address1"
    t.string "address2"
    t.string "state"
    t.string "postal_code"
    t.string "country"
    t.string "city"
    t.string "contact"
    t.string "status", default: "pending"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["customer_id"], name: "index_tranxactions_on_customer_id"
    t.index ["promo_id"], name: "index_tranxactions_on_promo_id"
  end

end
