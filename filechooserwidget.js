#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_button_clicked(widget)
{
    print("Selected file: " + widget.get_filename());
    Gtk.main_quit();
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_default_size(600, 400);
window.set_border_width(5);
window.set_title("FileChooserWidget");
window.connect("destroy", Gtk.main_quit);

let grid = new Gtk.Grid();
grid.set_row_spacing(5);
window.add(grid);

let filechooserwidget = new Gtk.FileChooserWidget();
filechooserwidget.set_vexpand(true);
grid.attach(filechooserwidget, 0, 0, 1, 1);

let buttonbox = new Gtk.ButtonBox();
buttonbox.set_layout(Gtk.ButtonBoxStyle.END);
grid.attach(buttonbox, 0, 1, 1, 1);

let buttonSelect = new Gtk.Button({label: "Select"});
buttonSelect.connect("clicked", function() {on_button_clicked(filechooserwidget)});
buttonbox.add(buttonSelect);

window.show_all();

Gtk.main();
