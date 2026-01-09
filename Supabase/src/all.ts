import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
);

// INSERT DATA
async function insertTodo() {
    const { data, error } = await supabase.from('todos').insert({ 
            title: 'Learn Supabase', 
            completed: false 
}).select();

    if (error) {
        console.error('Error inserting:', error);
        return null;
    }
    console.log('Inserted:', data);
    return data;
}
insertTodo()
// INSERT MULTIPLE
async function insertMultipleTodos() {
    const { data, error } = await supabase
        .from('todos')
        .insert([
            { title: 'Task 1', completed: false },
            { title: 'Task 2', completed: false },
            { title: 'Task 3', completed: true }
        ])
        .select();

    if (error) {
        console.error('Error inserting multiple:', error);
        return null;
    }
    
    console.log('Inserted multiple:', data);
    return data;
}

// FETCH ALL DATA
async function fetchAllTodos() {
    const { data, error } = await supabase
        .from('todos')
        .select('*');

    if (error) {
        console.error('Error fetching:', error);
        return null;
    }
    
    console.log('All todos:', data);
    return data;
}

// FETCH WITH FILTER
async function fetchIncompleteTodos() {
    const { data, error } = await supabase
        .from('todos')
        .select('*')
        .eq('completed', false); // Filter where completed = false

    if (error) {
        console.error('Error fetching incomplete todos:', error);
        return null;
    }
    
    console.log('Incomplete todos:', data);
    return data;
}

// FETCH SINGLE ROW
async function fetchTodoById(id: number) {
    const { data, error } = await supabase
        .from('todos')
        .select('*')
        .eq('id', id)
        .single(); // Returns single object instead of array

    if (error) {
        console.error('Error fetching todo by id:', error);
        return null;
    }
    
    console.log('Todo:', data);
    return data;
}

// UPDATE DATA
async function updateTodo(id: number) {
    const { data, error } = await supabase
        .from('todos')
        .update({ completed: true })
        .eq('id', id)
        .select();

    if (error) {
        console.error('Error updating:', error);
        return null;
    }
    
    console.log('Updated:', data);
    return data;
}

// DELETE DATA
async function deleteTodo(id: number) {
    const { error } = await supabase
        .from('todos')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting:', error);
        return false;
    }
    
    console.log('Deleted successfully');
    return true;
}

// DELETE MULTIPLE
async function deleteMultipleTodos(ids: number[]) {
    const { error } = await supabase
        .from('todos')
        .delete()
        .in('id', ids);

    if (error) {
        console.error('Error deleting multiple:', error);
        return false;
    }
    
    console.log('Deleted multiple successfully');
    return true;
}

// EXAMPLE USAGE - Run all operations
async function main() {
    console.log('=== Starting CRUD Operations ===\n');

    // Insert
    console.log('1. INSERTING...');
    const newTodo = await insertTodo();
    await insertMultipleTodos();
    console.log('\n');

    // Fetch
    console.log('2. FETCHING ALL...');
    await fetchAllTodos();
    console.log('\n');

    console.log('3. FETCHING INCOMPLETE...');
    await fetchIncompleteTodos();
    console.log('\n');

    // Update
    if (newTodo && newTodo[0]) {
        console.log('4. UPDATING...');
        await updateTodo(newTodo[0].id);
        console.log('\n');
    }

    // Fetch by ID
    if (newTodo && newTodo[0]) {
        console.log('5. FETCHING BY ID...');
        await fetchTodoById(newTodo[0].id);
        console.log('\n');
    }

    // Delete
    if (newTodo && newTodo[0]) {
        console.log('6. DELETING...');
        await deleteTodo(newTodo[0].id);
        console.log('\n');
    }

    console.log('=== CRUD Operations Complete ===');
}

// Run the main function
main().catch(console.error);