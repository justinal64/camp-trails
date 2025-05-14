import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Filter, Plus, Search, Utensils } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import { MealCard } from '@/components/meals/MealCard';
import { EmptyState } from '@/components/shared/EmptyState';

// Mock data for demonstration
const mockMeals = [
  {
    id: '1',
    name: 'Campfire Chili',
    category: 'Dinner',
    prepTime: '15 min',
    cookTime: '30 min',
    servings: 4,
    calories: 450,
    image: 'https://images.pexels.com/photos/5698756/pexels-photo-5698756.jpeg',
    diet: ['Vegetarian'],
  },
  {
    id: '2',
    name: 'Trail Mix Granola',
    category: 'Breakfast',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: 2,
    calories: 320,
    image: 'https://images.pexels.com/photos/4051636/pexels-photo-4051636.jpeg',
    diet: ['Vegan', 'Gluten-Free'],
  },
];

export default function MealsScreen() {
  const [meals, setMeals] = useState(mockMeals);
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meal Planner</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.iconButton}>
            <Filter size={20} color={Colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton}>
            <Plus size={20} color={Colors.white} />
            <Text style={styles.addButtonText}>New Recipe</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color={Colors.gray[400]} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search recipes..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>
      
      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
          <TouchableOpacity style={[styles.categoryButton, styles.categoryButtonActive]}>
            <Text style={styles.categoryButtonTextActive}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Breakfast</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Lunch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Dinner</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Snacks</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      
      {meals.length > 0 ? (
        <ScrollView contentContainerStyle={styles.mealsContainer}>
          {meals.map((meal) => (
            <MealCard
              key={meal.id}
              name={meal.name}
              category={meal.category}
              prepTime={meal.prepTime}
              cookTime={meal.cookTime}
              servings={meal.servings}
              calories={meal.calories}
              image={meal.image}
              diet={meal.diet}
              onPress={() => {/* Navigate to meal details */}}
            />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyContainer}>
          <EmptyState
            icon={<Utensils size={40} color={Colors.primary} />}
            title="No meals added yet"
            message="Start building your collection of camping recipes."
            actionLabel="Add Recipe"
            onAction={() => {/* Navigate to meal creation */}}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    marginRight: 8,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: Colors.white,
    marginLeft: 4,
    fontWeight: '500',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gray[100],
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: Colors.text,
  },
  categoriesContainer: {
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
  categories: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: Colors.gray[100],
  },
  categoryButtonActive: {
    backgroundColor: Colors.primary,
  },
  categoryButtonText: {
    color: Colors.text,
    fontWeight: '500',
  },
  categoryButtonTextActive: {
    color: Colors.white,
    fontWeight: '500',
  },
  mealsContainer: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
});