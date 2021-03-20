const { gql } = require('apollo-server');

module.exports = gql`

	# Query definitions

	type Query {
		users: [User]!
		me: User
		impressions: [Impression]
		posts: [Post]
		postById(id: ID): Post
		impressionById(id: ID!): Impression 
	}

	# Mutation definitions

	type Mutation {
		login(username: String, password: String): UserReturn # { login token, user id, username }
		register(user: UserRegisterDetails): String # Message
		addPost(postInfo: PostInfo): Post
	}

	# Type definitions

	type User {
		user_id: Int
		username: String
		name: String
		surname: String
		city: String
		address: String
		email: String
		bio: String
		gender: String
		date_of_birth: String
		pr_picture_url: String
		pref_roommate_num: Int
	}

	type Contact {
		contact_id: ID
		name: String
		email: String
		message: String
	}

	type Impression {
		impression_id: ID
		contact: Contact
	}

	type Post {
		post_id: ID
		description: String
		address: String
		rent: Int
		num_of_roommates: Int
		author: User
		post_type: PostType
		images: [Image]
	}

	type PostType {
		post_type_id: ID
		name: String
		posts: [Post]
	}

	type Image {
		image_id: ID
		url: String
		post: Post
	}

	type UserReturn {
		token: String
		id: ID
		username: String
	}

	# input definitions
	
	input UserRegisterDetails {
		username: String!
		password: String!
		name: String
		surname: String
		city: String
		address: String
		email: String
		bio: String
		gender: String
		date_of_birth: String
		pr_picture_url: String
		pref_roommate_num: Int
	}

	input PostInfo {
		author: ID!
		post_type: ID!
		description: String
		address: String
		rent: Int
		num_of_roommates: Int
	}
`;