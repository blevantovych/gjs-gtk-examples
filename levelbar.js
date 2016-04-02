#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_increase_clicked()
{
    var value = levelbar.get_value();

    if (value < levelbar.get_max_value())
    {
        levelbar.set_value(value + 1);
    }
}

function on_decrease_clicked()
{
    var value = levelbar.get_value();

    if (value > levelbar.get_min_value())
    {
        levelbar.set_value(value - 1);
    }
}

var window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("LevelBar");
window.connect("destroy", Gtk.main_quit);

var grid = new Gtk.Grid();
grid.set_column_homogeneous(true);
window.add(grid);

var levelbar = new Gtk.LevelBar();
levelbar.set_min_value(0);
levelbar.set_max_value(10);
grid.attach(levelbar, 0, 0, 2, 1);

var buttonIncrease = new Gtk.Button({label: "Increase"});
buttonIncrease.connect("clicked", function() {on_increase_clicked()});
grid.attach(buttonIncrease, 0, 1, 1, 1);

var buttonDecrease = new Gtk.Button({label: "Decrease"});
buttonDecrease.connect("clicked", function() {on_decrease_clicked()});
grid.attach(buttonDecrease, 1, 1, 1, 1);

window.show_all();

Gtk.main();
