CREATE TABLE IF NOT EXISTS products (
	item_id SERIAL PRIMARY KEY,
	title TEXT ,
	description_item TEXT,
  product_img TEXT,
  price TEXT,
  likes INT
);