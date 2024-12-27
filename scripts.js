
// Toggle Theme
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Fetch Live Market Price
fetch('https://api.coingecko.com/api/v3/simple/price?ids=sardes-coin&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        document.getElementById('market-price').textContent = `$${data['sardes-coin'].usd}`;
    })
    .catch(err => console.error('Error fetching market price:', err));

// Calculate Staking Rewards
function calculateRewards() {
    const amount = document.getElementById('stake-amount').value;
    const rewards = amount * 0.1; // Example: 10% reward rate
    document.getElementById('reward-display').textContent = `Estimated Rewards: ${rewards} SRD`;
}

// Blog Loading Simulation
document.addEventListener('DOMContentLoaded', () => {
    const blogList = document.getElementById('blog-list');
    const blogPosts = [
        'SRD reaches new ATH!',
        'How staking can benefit you?',
        'Q1 2024: Sardes Coin roadmap updates.'
    ];
    blogList.innerHTML = '';
    blogPosts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post;
        blogList.appendChild(li);
    });
});
