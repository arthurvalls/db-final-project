from flask import Flask, render_template, request
import csv
import requests

app = Flask(__name__)

# Load Pokemon data from CSV file
def load_pokemon_data():
    pokemon_data = []
    with open('pokemon.csv', 'r') as csv_file:
        reader = csv.DictReader(csv_file)
        for row in reader:
            pokemon_data.append(row)
    return pokemon_data

@app.route('/', methods=['GET', 'POST'])
def index():
    # Load Pokemon data
    pokemon_data = load_pokemon_data()

    if request.method == 'POST':
        # Get the search term from the form
        search_term = request.form['search_term']

        # Filter the Pokemon data based on the search term
        filtered_pokemon = []
        for pokemon in pokemon_data:
            if search_term.lower() in pokemon['Name'].lower():
                filtered_pokemon.append(pokemon)
        
        # Fetch the image URL from the PokeAPI for each matching Pokemon
        for pokemon in filtered_pokemon:
            name = pokemon['Name']
            url = f"https://pokeapi.co/api/v2/pokemon/{name.lower()}"
            response = requests.get(url)
            if response.status_code == 200:
                data = response.json()
                if data['sprites'] and data['sprites']['front_default']:
                    pokemon['ImageURL'] = data['sprites']['front_default']
        
        return render_template('index.html', pokemon_data=filtered_pokemon, search_term=search_term)
    
    return render_template('index.html', pokemon_data=pokemon_data)

if __name__ == '__main__':
    app.run(debug=True)
