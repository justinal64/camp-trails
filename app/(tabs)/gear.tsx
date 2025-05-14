import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Backpack, Filter, Plus, Tag } from 'lucide-react-native';
import { Shelter, Cooking, Clothing } from '@/components/icons/CustomIcons';
import Colors from '@/constants/Colors';
import { GearCard } from '@/components/gear/GearCard';
import { EmptyState } from '@/components/shared/EmptyState';

// Mock data for demonstration
const mockGear = [
  {
    id: '1',
    name: 'Big Agnes Copper Spur HV UL2',
    category: 'Shelter',
    weight: '2 lbs 12 oz',
    lastMaintenance: 'April 10, 2025',
    image: 'https://images.pexels.com/photos/2582818/pexels-photo-2582818.jpeg',
    status: 'Good',
  },
  {
    id: '2',
    name: 'MSR Pocket Rocket Deluxe',
    category: 'Cooking',
    weight: '2.9 oz',
    lastMaintenance: 'March 5, 2025',
    image: 'https://images.pexels.com/photos/6271625/pexels-photo-6271625.jpeg',
    status: 'Needs maintenance',
  },
];

export default function GearScreen() {
  const [gear, setGear] = useState(mockGear);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Gear</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.iconButton}>
            <Filter size={20} color={Colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton}>
            <Plus size={20} color={Colors.white} />
            <Text style={styles.addButtonText}>Add Gear</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categories}>
          <TouchableOpacity style={styles.categoryItem}>
            <View style={[styles.categoryIcon, { backgroundColor: Colors.primary }]}>
              <Tag size={20} color={Colors.white} />
            </View>
            <Text style={styles.categoryText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <View style={[styles.categoryIcon, { backgroundColor: Colors.accent }]}>
              <Shelter size={20} color={Colors.white} />
            </View>
            <Text style={styles.categoryText}>Shelter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <View style={[styles.categoryIcon, { backgroundColor: Colors.error }]}>
              <Cooking size={20} color={Colors.white} />
            </View>
            <Text style={styles.categoryText}>Cooking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <View style={[styles.categoryIcon, { backgroundColor: Colors.secondary }]}>
              <Clothing size={20} color={Colors.white} />
            </View>
            <Text style={styles.categoryText}>Clothing</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.gearListContainer}>
        <Text style={styles.sectionTitle}>Gear Items</Text>
        {gear.length > 0 ? (
          <FlatList
            data={gear}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <GearCard
                name={item.name}
                category={item.category}
                weight={item.weight}
                lastMaintenance={item.lastMaintenance}
                image={item.image}
                status={item.status}
                onPress={() => {/* Navigate to gear details */}}
              />
            )}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <EmptyState
              icon={<Backpack size={40} color={Colors.primary} />}
              title="No gear added yet"
              message="Start building your gear inventory for your next adventure."
              actionLabel="Add Gear"
              onAction={() => {/* Navigate to gear creation */}}
            />
          </View>
        )}
      </View>
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
  categoriesContainer: {
    padding: 16,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 12,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
    width: '25%',
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    color: Colors.text,
    textAlign: 'center',
  },
  gearListContainer: {
    flex: 1,
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});