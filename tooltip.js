#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_tooltip_query(button, x, y, keyboard, tooltip)
{
    tooltip.set_text('Displaying an advanced tooltip.');

    return true;
}

var window = new Gtk.Window();
window.set_title('Tooltip');
window.connect('destroy', Gtk.main_quit);

var grid = new Gtk.Grid();
window.add(grid);

var button = new Gtk.Button({label: 'Simple Tooltip'});
button.set_tooltip_text('Displaying a simple tooltip.');
grid.attach(button, 0, 0, 1, 1);

var tooltip = new Gtk.Tooltip();

var button = new Gtk.Button({label: 'Advanced Tooltip'});
button.set_has_tooltip(true);
button.connect('query-tooltip', on_tooltip_query);
grid.attach(button, 0, 1, 1, 1);

window.show_all();

Gtk.main();
