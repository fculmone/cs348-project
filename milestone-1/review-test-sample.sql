-- 1) List all reviews on Paris, France ( also user email) and sort it by latest date of creation
SELECT c.city_name, c.country, r.review_text, r.user_email, r.date_created
FROM reviews r
JOIN cities c ON r.city_id = c.city_id
WHERE c.city_name = 'Paris' AND c.country = 'France'
ORDER BY r.date_created DESC;

-- 2) Bart added a new review for Paris after second visit, and show all Bart's reviews on Paris, France
INSERT INTO reviews (user_email, city_id, rating, review_text)
VALUES ('bart@simpson.com', 1, 5, 'Paris is even better on my second visit! Highly recommend!');
SELECT r.review_id, r.rating, r.review_text, r.date_created
FROM reviews r
JOIN cities c ON r.city_id = c.city_id
WHERE r.user_email = 'bart@simpson.com'
  AND c.city_name = 'Paris'AND c.country = 'France';

-- 3) Amanda wants to edit her review and rating where review_id was 3
UPDATE reviews
SET rating = 4, review_text = 'Nice place, but a bit crowded. Would recommend during off-peak seasons.'
WHERE review_id = 3;
select * from reviews;
