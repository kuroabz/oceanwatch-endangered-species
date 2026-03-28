import React, { useState } from 'react';


const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Impact of Ocean Plastic: A Deep Dive into Marine Conservation",
      excerpt: "Discover how plastic pollution affects marine ecosystems and what we can do to make a difference in ocean conservation efforts worldwide.",
      category: "research",
      author: "Dr. Sarah Ocean",
      date: "Dec 1, 2024",
      readTime: "8 min read",
      likes: 342,
      comments: 45,
      views: 1250,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "10 Ways You Can Help Save Our Oceans Today",
      excerpt: "Simple, actionable steps everyone can take to reduce their environmental impact and contribute to ocean conservation.",
      category: "tips",
      author: "Mike Waters",
      date: "Nov 28, 2024",
      readTime: "5 min read",
      likes: 567,
      comments: 89,
      views: 2340,
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Community Cleanup Success: 5 Tons of Debris Removed",
      excerpt: "Our volunteers came together for the largest beach cleanup event of the year, making an incredible impact on local marine life.",
      category: "stories",
      author: "Emma Green",
      date: "Nov 25, 2024",
      readTime: "6 min read",
      likes: 823,
      comments: 156,
      views: 3120,
      image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "New Marine Protected Areas Announced in Pacific",
      excerpt: "Government officials announce expansion of marine sanctuaries, protecting thousands of square miles of critical ocean habitat.",
      category: "news",
      author: "James Reporter",
      date: "Nov 22, 2024",
      readTime: "4 min read",
      likes: 445,
      comments: 67,
      views: 1890,
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Understanding Coral Bleaching and Climate Change",
      excerpt: "An in-depth look at the relationship between rising ocean temperatures and coral reef degradation around the world.",
      category: "research",
      author: "Dr. Coral Reef",
      date: "Nov 20, 2024",
      readTime: "10 min read",
      likes: 298,
      comments: 34,
      views: 980,
      image: "https://images.unsplash.com/photo-1546500840-ae38253aba9b?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Sustainable Seafood Guide for Conscious Consumers",
      excerpt: "Learn which seafood choices support ocean health and sustainable fishing practices while enjoying delicious meals.",
      category: "tips",
      author: "Chef Marina",
      date: "Nov 18, 2024",
      readTime: "7 min read",
      likes: 512,
      comments: 92,
      views: 2100,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
      featured: false
    }
  ]);

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'research', label: 'Research' },
    { id: 'tips', label: 'Tips & Guides' },
    { id: 'stories', label: 'Success Stories' },
    { id: 'news', label: 'Latest News' }
  ];

  const featuredPost = posts.find(post => post.featured) || posts[0];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="view-report-container blog-section">
      {/* Header */}
      <div className="blog-header">
        <div className="header-content">
          <h2>Community Blog</h2>
          <p className="subtitle">Share, learn, and discuss ocean conservation with our global community</p>
        </div>
        <div className="header-actions">
          <button className="button create-post-btn">
            <i className="fas fa-edit"></i> Write a Post
          </button>
        </div>
      </div>

      {/* Featured Post */}
      <div className="featured-post">
        <div className="featured-image">
          <img src={featuredPost.image} alt={featuredPost.title} />
          <div className="featured-badge">FEATURED</div>
        </div>
        <div className="featured-content">
          <span className="post-category">{featuredPost.category}</span>
          <h3>{featuredPost.title}</h3>
          <p className="post-excerpt">{featuredPost.excerpt}</p>
          <div className="post-meta">
            <div className="author-info">
              <img src={`https://i.pravatar.cc/40?u=${featuredPost.author}`} alt={featuredPost.author} />
              <div>
                <strong>{featuredPost.author}</strong>
                <span>{featuredPost.date} • {featuredPost.readTime}</span>
              </div>
            </div>
            <div className="post-stats">
              <button className="stat-btn" onClick={() => handleLike(featuredPost.id)}>
                <i className="fas fa-heart"></i> {featuredPost.likes}
              </button>
              <button className="stat-btn">
                <i className="fas fa-comment"></i> {featuredPost.comments}
              </button>
              <button className="button read-btn">Read Full Article</button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="filters blog-filters">
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div className="search-container">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="inputText"
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery('')}>
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="incidents-list blog-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.filter(post => !post.featured).map((post) => (
            <div key={post.id} className="incident-card blog-card">
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-card-content">
                <h3>{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-card-meta">
                  <div className="author">
                    <img src={`https://i.pravatar.cc/32?u=${post.author}`} alt={post.author} />
                    <div>
                      <div className="author-name">{post.author}</div>
                      <div className="post-date">{post.date}</div>
                    </div>
                  </div>
                  <div className="blog-actions">
                    <button 
                      className="action-btn like-btn"
                      onClick={() => handleLike(post.id)}
                    >
                      <i className="fas fa-heart"></i>
                      <span>{post.likes}</span>
                    </button>
                    <button className="action-btn">
                      <i className="fas fa-comment"></i>
                      <span>{post.comments}</span>
                    </button>
                    <button className="button read-more-btn">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>No posts found</h3>
            <p>Try a different search term or category</p>
          </div>
        )}
      </div>

      {/* Load More */}
      {filteredPosts.length > 0 && (
        <div className="load-more">
          <button className="button load-more-btn">
            <i className="fas fa-sync-alt"></i> Load More Posts
          </button>
        </div>
      )}

      {/* Community Stats */}
      <div className="community-stats">
        <div className="stat-card">
          <i className="fas fa-newspaper"></i>
          <div>
            <h3>{posts.length}</h3>
            <p>Total Posts</p>
          </div>
        </div>
        <div className="stat-card">
          <i className="fas fa-comments"></i>
          <div>
            <h3>{posts.reduce((sum, post) => sum + post.comments, 0)}</h3>
            <p>Total Comments</p>
          </div>
        </div>
        <div className="stat-card">
          <i className="fas fa-heart"></i>
          <div>
            <h3>{posts.reduce((sum, post) => sum + post.likes, 0)}</h3>
            <p>Total Likes</p>
          </div>
        </div>
        <div className="stat-card">
          <i className="fas fa-eye"></i>
          <div>
            <h3>{posts.reduce((sum, post) => sum + (post.views || 0), 0).toLocaleString()}</h3>
            <p>Total Views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;