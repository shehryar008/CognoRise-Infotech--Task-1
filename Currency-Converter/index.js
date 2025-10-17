document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('currencyForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const quantity = document.getElementById('textInput').value;
        const currency = document.getElementById('selectMenu').value;
        const tbody = document.querySelector('tbody');

        if (quantity && currency) {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
                const data = await response.json();

                tbody.innerHTML = '';
                for (const [key, value] of Object.entries(data.rates)) {
                    const convertedValue = (quantity * value).toFixed(2);
                    tbody.innerHTML += `
                                <tr>
                                    <td>${key}</td>
                                    <td>${key}</td>
                                    <td>${convertedValue}</td>
                                </tr>
                            `;
                }
            } catch (error) {
                console.error('Error fetching conversion rates:', error);
            }
        } else {
            alert('Please enter a quantity and select a currency.');
        }
    });
});
