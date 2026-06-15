<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Portfolio');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// ----------------------
// Route untuk Experience Media
// ----------------------
Route::get('/experience/media', function () {
    return Inertia::render('ExperienceMedia', [
        'title' => request('title', 'Experience Media'),
        'media' => request('media'),
        'isLight' => false,
    ]);
})->name('experience.media');

Route::get('/projects/{slug}', function ($slug) {
    return Inertia::render('Projects/Show', [
        'slug' => $slug,
    ]);
})->name('projects.show');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
});

require __DIR__.'/auth.php';