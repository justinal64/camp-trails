import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Calendar, Plus, Filter } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import { TripCard } from '@/components/trips/TripCard';
import { EmptyState } from '@/components/shared/EmptyState';

// Mock data for demonstration
const mockTrips = [
  {
    id: '1',
    title: 'Yosemite Backpacking',
    dates: 'May 15-18, 2025',
    location: 'Yosemite National Park, CA',
    image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
    participants: 3,
    completionRate: 75,
  },
  {
    id: '2',
    title: 'Lake Tahoe Weekend',
    dates: 'July 4-6, 2025',
    location: 'Lake Tahoe, CA',
    image: 'https://images.pexels.com/photos/2832039/pexels-photo-2832039.jpeg',
    participants: 2,
    completionRate: 45,
  },
];

export default function TripsScreen() {
  const [trips, setTrips] = useState(mockTrips);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Trips</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.iconButton}>
            <Filter size={20} color={Colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton}>
            <Plus size={20} color={Colors.white} />
            <Text style={styles.addButtonText}>New Trip</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {trips.length > 0 ? (
        <FlatList
          data={trips}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <TripCard
              title={item.title}
              dates={item.dates}
              location={item.location}
              image={item.image}
              participants={item.participants}
              completionRate={item.completionRate}
              onPress={() => {/* Navigate to trip details */}}
            />
          )}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <EmptyState
            icon={<Calendar size={40} color={Colors.primary} />}
            title="No trips planned yet"
            message="Start planning your next adventure by creating a new trip."
            actionLabel="Create Trip"
            onAction={() => {/* Navigate to trip creation */}}
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
  listContent: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
});