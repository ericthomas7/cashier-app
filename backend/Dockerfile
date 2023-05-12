FROM ruby:3.0.2-alpine AS builder
  RUN apk add \
    build-base \
    postgresql-dev
  COPY backend/Gemfile* .
  RUN gem install bundler:2.4.12
  RUN bundle install
FROM ruby:3.0.2-alpine AS runner
  RUN apk add \
      tzdata \
      nodejs \
      postgresql-dev
  WORKDIR /app
  # We copy over the entire gems directory for our builder image, containing the already built artifact
  COPY --from=builder /usr/local/bundle/ /usr/local/bundle/
  COPY /backend/. .
  RUN rake db:create
  RUN rake db:migrate
  EXPOSE 3000
  CMD ["rails", "server", "-b", "0.0.0.0"]