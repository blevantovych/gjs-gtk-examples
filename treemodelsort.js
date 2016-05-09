#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;

Gtk.init(null);

var window = new Gtk.Window();
window.set_title('TreeModelSort');
window.set_default_size(200, 200);
window.connect('destroy', Gtk.main_quit);

var liststore = new Gtk.ListStore();
liststore.set_column_types([GObject.TYPE_STRING]);

liststore.set(liststore.append(), [0], ['Volkswagen']);
liststore.set(liststore.append(), [0], ['Ferrari']);
liststore.set(liststore.append(), [0], ['Audi']);
liststore.set(liststore.append(), [0], ['Porsche']);
liststore.set(liststore.append(), [0], ['Chevrolet']);

var treemodelsort = new Gtk.TreeModelSort({model: liststore});
treemodelsort.set_sort_column_id(0, Gtk.SortType.ASCENDING);

var cellrenderertext = new Gtk.CellRendererText();
var treeview = new Gtk.TreeView();
treeview.set_model(treemodelsort);
window.add(treeview);

var treeviewcolumn = new Gtk.TreeViewColumn({title: 'Cars'});
treeviewcolumn.pack_start(cellrenderertext, true);
treeviewcolumn.add_attribute(cellrenderertext, 'text', 0);
treeview.append_column(treeviewcolumn);

window.show_all();

Gtk.main();
